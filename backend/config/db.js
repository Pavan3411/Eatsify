import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sutharpavan9153:HNgHsdQFdHAnObIi@cluster0.efoepc6.mongodb.net/food-delivery').then(()=> console.log("DB connected"));
}