import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    profilePicture: { type: String, default: "" },
    password: { type: String, required: true },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);
export default User;
