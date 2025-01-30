import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import feedbackRoutes from "./routes/feedbackRoutes.js"; // Ensure path is correct

// Load environment variables
dotenv.config();

const __dirname = path.resolve();

// Initialize Express
const app = express();
const corsOption = {
  origin: process.env.URL,
  credentials: true
}

// Middleware
app.use(cors(corsOption));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


// API Routes
app.use("/api", feedbackRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Adjusted the path
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
