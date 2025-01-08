const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World and All super props");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
