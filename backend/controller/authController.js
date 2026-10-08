import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {sendEmail} from "../utils/sendEmail.js"

const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'});
}
export async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;

        const userExists = await userModel.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({ name, email, password: hashedPassword});

        if (user) {
            const otp = Math.floor(100000 + Math.random() * 900000);
            const message = `
                    <h2>Welcome to Ecommy, ${name}!</h2>
                    <p>Thank you for registering on our platform.</p>
                    <p>Your one-time verification/discount OTP is: <strong>${otp}</strong></p>
                `;
            await sendEmail({
                email: user.email,
                subject: 'Welcome to Ecommy - Your OTP',
                message
            });

            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id)
            });
        }
        else{
            res.status(400).json({message: 'Invalid user data'})
        }
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
};

export async function loginUser(req, res){
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});

        if(user && (bcrypt.compare(password, user.password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                token: generateToken(user._id),
            });
        }
        else{
            res.status(401).json({message: "Invalid username or password"})
        }
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export async function getUsers(req, res){
    try {
        const users = await userModel.find({}).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
}