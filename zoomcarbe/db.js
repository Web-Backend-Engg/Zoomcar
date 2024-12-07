import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://kbhat:kbhat123@cluster0.2fmoj.mongodb.net/zoomcar');
        console.log("Connection success");
    } catch (error) {
        console.log(error);
    }
}