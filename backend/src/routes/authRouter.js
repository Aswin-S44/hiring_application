const express = require("express");
const {
  CompanySignUp,
  Login,
  getMe,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");
const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  res.send("Auth related routes called");
});

authRouter.post("/signup", CompanySignUp);
authRouter.post("/signin", Login);
authRouter.get("/me", protect, getMe);

module.exports = authRouter;
