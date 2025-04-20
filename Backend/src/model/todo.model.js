import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  email: { type: String, required: true },
  taskname: { type: String, default: "Untitled" },
  description: { type: String, default: "No Description" },
  time: { type: String, default: "00:00" },
  date: { type: String, default: "" },
  status: { type: String, default: "Pending" },
});

const Todo = mongoose.model("Todo", todoSchema); // Correctly define the model

export default Todo; // Export the model
