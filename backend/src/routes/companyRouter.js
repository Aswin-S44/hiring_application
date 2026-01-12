const express = require("express");
const { AddJob } = require("../controllers/company/AddJob");
const {
  getJobsByCompanyId,
} = require("../controllers/company/getJobByCompanyId");
const { getJobById } = require("../controllers/company/getJobById");
const {
  getJobDetailsByCompanyId,
} = require("../controllers/company/getJobDetailsByCompanyId");
const { updateJobById } = require("../controllers/company/updateJobById");
const { deleteJobById } = require("../controllers/company/deleteJobById");

const companyRouter = express.Router();

companyRouter.get("/", (req, res) => {
  res.send("Company router calleed");
});

companyRouter.post("/job", AddJob);

companyRouter.get("/jobs/:id", getJobsByCompanyId);

companyRouter.get("/job/:id", getJobById);

companyRouter.get("/:companyId/job/:jobId", getJobDetailsByCompanyId);

companyRouter.put("/job/:jobId", updateJobById);

companyRouter.delete("/job/:jobId", deleteJobById);

module.exports = companyRouter;
