const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Company = require("../models/company");
const Candidate = require("../models/candidate");

module.exports.CompanySignUp = async (req, res) => {
  try {
    const {
      email,
      password,
      companyName,
      companyEmail,
      website,
      industry,
      companySize,
      location,
      description,
    } = req.body;

    if (!email || !password || !companyName) {
      return res.status(400).json({
        success: false,
        message: "Email, password and company name are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Company already registered with this email",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      email,
      password: hashedPassword,
      role: "COMPANY",
    });

    const companyProfile = await Company.create({
      userId: user._id,
      companyName,
      companyEmail,
      website,
      industry,
      companySize,
      location,
      description,
    });

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET || "something_secret",
      {
        expiresIn: "7d",
      }
    );

    return res.status(201).json({
      success: true,
      message: "Company registered successfully",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      companyProfile,
    });
  } catch (error) {
    console.log("Error while signup : ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ success: false, message: "Email and password required" });

    const user = await User.findOne({ email }).select("+password");
    if (!user || user.role !== "COMPANY")
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    let userDetails = null;

    if (user.role === "COMPANY") {
      userDetails = await Company.findOne({ userId: user._id });
    } else if (user.role === "CANDIDATE") {
      userDetails = await Candidate.findOne({ userId: user._id });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userDetails,
    });
  } catch (error) {
    console.error("Error while login:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports.getMe = async (req, res) => {
  try {
    let profile = null;

    if (req.user.role === "COMPANY") {
      profile = await Company.findOne({ userId: req.user._id });
    }

    if (req.user.role === "CANDIDATE") {
      profile = await Candidate.findOne({ userId: req.user._id });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: req.user._id,
        email: req.user.email,
        role: req.user.role,
      },
      profile,
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
