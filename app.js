const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World and All super props");
});

app.post("/", (req, res) => {
  res.send("Hello World Posted successfully");
});

app.delete("/", (req, res) => {
  res.send("Hello World deleted");
});
app.get("/post:id", (req, res) => {
  res.send(`Get request params is ${req.params.id} | ${req.path}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
