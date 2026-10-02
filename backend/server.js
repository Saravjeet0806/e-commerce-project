import express, { urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'
import authRouter from './routes/authRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get("/health", (req, res)=>{
    res.send("hello world");
})

app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));