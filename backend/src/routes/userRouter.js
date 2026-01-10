const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user related routes");
});

// router.

module.exports = router;
