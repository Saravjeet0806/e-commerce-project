import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'

dotenv.config();
connectDB();
const app = express();

app.get("/health", (req, res)=>{
    res.send("hello world");
})

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));