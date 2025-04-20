import mongoose from "mongoose";

export const ConnectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected:", conn.connection);
  } catch (error) {
    console.log(error);
  }
};
