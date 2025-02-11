const express = require("express");
const morgan = require("morgan");
const connectDB = require("./src/config/database");
const userRoutes = require("./src/routes/userRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();

// DB CONNECTION
connectDB();

// Logger
app.use(morgan("dev"));

app.use(cors());

// Parser
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Startserver
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
