 import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

const url = process.env.Url;
// for databse connection
const connectdb = async()=>{
await mongoose.connect(url);
console.log('mongodb is connected!');
}

export {connectdb};