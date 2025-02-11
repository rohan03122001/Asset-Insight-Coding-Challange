const express = require("express");
const app = express();
const connectDB = require("./src/config/database");

// Connect Database
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, User Management!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
