import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("MongoDB connection string is not defined");
    }

    const conn = await mongoose.connect(mongoUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`MongoDB Error: ${error.message}`);
  }
};

export default connectDB;
