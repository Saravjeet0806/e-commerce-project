import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import productModel from "../models/productModel.js";

export async function getAdminStats(req, res){
    try{
        const totalUsers = await userModel.countDocuments({role: 'user'});
        const totalOrders = await orderModel.countDocuments({});
        const totalProducts = await productModel.countDocuments({});

        const orders = await orderModel.find({});
        const totalRevenue = orders.reduce((acc, item)=>acc+item.totalAmount, 0);

        res.json({ totalOrders, totalProducts, totalUsers, totalRevenue });
    }
    catch(error){
         res.status(500).json({ message: error.message });
    }
}