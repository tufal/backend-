import mongoose from "mongoose";
import { DB_NAME } from "../consatant.js";


const connectDb = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
   console.log("DB_NAME =", DB_NAME);
   console.log("MONGO_URL =", process.env.MONGO_URL);


    console.log(`MongoDB connected ${connection.connection.host}`);
    } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
    }
};
export default connectDb;