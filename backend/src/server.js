const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Nodejs app is running....");
});

app.listen(port, () => {
  console.log(`Server is running at the port : ${port}`);
});
