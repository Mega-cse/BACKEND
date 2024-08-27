import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const mongoDBConnectionString =process.env.mongoDBConnectionString
const connectDB =async()=>
{
    try {
        const connection = await mongoose.connect(mongoDBConnectionString)
        console.log("connected");

}
catch(error)

{
    console.error("error",error);
}

}
export default connectDB;