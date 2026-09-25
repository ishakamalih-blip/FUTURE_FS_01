const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const leadRoutes = require("./routes/leadRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Check MongoDB environment variable
if (!MONGODB_URI) {
  console.error("ERROR: MONGODB_URI environment variable is not set!");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "FUTURE_FS_02 CRM Backend is running successfully!",
  });
});

// Leads API
app.use("/api/leads", leadRoutes);

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});