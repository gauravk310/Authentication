import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URI = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
export const connectDB = async() => {
    try {
    await mongoose.connect(MONGO_URI) 
        // console.log('MongoDB Connection Succeeded.')
        
    } catch (error) {
        // console.log('Error in DB connection: ' + err)
        
    }
};
