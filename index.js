const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, User Management!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
