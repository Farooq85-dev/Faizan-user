import mongoose from "mongoose";
console.log(process.env?.MONGODB_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env?.MONGODB_URI);
    console.log("---- MONGODB connected SUCCESSFULLY ----");
  } catch (error) {
    console.log("---- MONGODB connection FAILED ----", error);
    process.exit(1);
  }
};

export default connectDB;
