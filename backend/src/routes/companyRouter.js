const express = require("express");
const { AddJob } = require("../controllers/company/AddJob");
const {
  getJobsByCompanyId,
} = require("../controllers/company/getJobByCompanyId");

const companyRouter = express.Router();

companyRouter.get("/", (req, res) => {
  res.send("Company router calleed");
});

companyRouter.post("/job", AddJob);

companyRouter.get("/jobs/:id", getJobsByCompanyId);

module.exports = companyRouter;
