const express = require("express");
const router = require("./routes/userRouter");
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");
const authRouter = require("./routes/authRouter");
const companyRouter = require("./routes/companyRouter");

dotenv.config();

db.connect();

const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/api/v1/user", router);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/company", companyRouter);

app.get("/", (req, res) => {
  res.send("Node.js server is running....");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
