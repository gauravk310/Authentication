import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URI = "mongodb+srv://gskadam3b:DYg41ThLcxliLpAa@cluster0.al9fmld.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0";
mongoose.Promise = global.Promise;
export const connectDB = async() => {
    try {
    await mongoose.connect(MONGO_URI) 
        console.log('MongoDB Connection Succeeded.')
        
    } catch (error) {
        console.log('Error in DB connection: ' + err)
        
    }
};
