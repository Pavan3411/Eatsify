import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/OrderRoute.js';
import dotenv from 'dotenv';
import path from 'path';

// Initialize dotenv
dotenv.config();




// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req,res)=> {
    res.send("API Working")
})

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

