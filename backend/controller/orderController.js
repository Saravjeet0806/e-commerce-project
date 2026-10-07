import { sendEmail } from '../utils/sendEmail.js'
import orderModel from '../models/orderModel.js'
export async function addOrderItems(req, res) {
    try {
        const { items, totalAmount, address, paymentId } = req.body;
        if (!items || items.length === 0) {
            return res.status(400).json({ message: 'Please add at least one item in the cart.' });
        }
        else {
            const order = new orderModel({
                userId: req.user._id,
                items, totalAmount, address, paymentId
            });
            const createdOrder = await order.save();
            const message = ` <h2>Order Confirmation</h2>
        <p>Hello ${req.user.name},</p>
        <p>Your order has been successfully placed! Order ID: <strong>${createdOrder._id}</strong></p>
        <p>Total Amount Paid: $${totalAmount.toFixed(2)}</p>
        <p>It will be shipped to: ${address.street}, ${address.city}</p>
        <p>Thank you for shopping with ShopNest!</p>`;
            await sendEmail({ email: req.user.email, subject: 'Ecommy- Order Confirmation', message });
            res.status(201).json(createdOrder);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export async function getOrders(req, res){
    try{
        const orders = await orderModel.find({}).populate('userId', '_id name');
        res.json(orders);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

export async function getMyOrders(req, res){
    try{
        const orders = await orderModel.find({userId: req.user._id});
        res.json(orders);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

export async function updateOrderStatus(req, res){
    try{
        const order = await orderModel.findById(req.params.id);
        if(order){
            order.status = req.body.status || order.status;
            const updatedOrder = await order.save();
            res.json(updatedOrder);
        }
        else{
            res.status(404).json({message: 'Order not found'});
        }
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};
