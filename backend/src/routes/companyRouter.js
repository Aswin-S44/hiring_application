const express = require("express");
const { AddJob } = require("../controllers/company/AddJob");
const {
  getJobsByCompanyId,
} = require("../controllers/company/getJobByCompanyId");
const { getJobById } = require("../controllers/company/getJobById");
const {
  getJobDetailsByCompanyId,
} = require("../controllers/company/getJobDetailsByCompanyId");

const companyRouter = express.Router();

companyRouter.get("/", (req, res) => {
  res.send("Company router calleed");
});

companyRouter.post("/job", AddJob);

companyRouter.get("/jobs/:id", getJobsByCompanyId);

companyRouter.get("/job/:id", getJobById);

companyRouter.get("/:companyId/job/:jobId", getJobDetailsByCompanyId);

module.exports = companyRouter;
