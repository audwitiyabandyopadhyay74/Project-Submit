// Global Imports
import dotenv from "dotenv";
dotenv.config(); // Ensure this is at the top of the file
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"; // Import cors

// Local Imports
import { ConnectDB } from "./lib/ConnectDB.js";
import { ConnectWithRedis } from "./lib/Redis.js";
import authRoutes from "./routes/auth.routes.js";
import todoRoutes from "./routes/todo.routes.js";

const app = express();
const PORT = 5000 || process.env.PORT;

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
  })
);

app.use(express.static("public")); // Serve static files from the "public" directory

app.use(cookieParser()); // Ensure this is before route handlers
app.use(express.json()); // Ensure this is applied to parse JSON requests

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/api/todo", todoRoutes);

// Catch-all route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.listen(PORT, () => {
  ConnectDB();
  ConnectWithRedis();
  console.log(`Server is running on port ${PORT}`);
});
