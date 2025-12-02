// mongodb+srv://suganya:<db_password>@suganya.fcgk8ss.mongodb.net/?appName=suganya

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => 
{
    try 
    {
        await mongoose.connect(process.env.CONECTION_STRING);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDB;