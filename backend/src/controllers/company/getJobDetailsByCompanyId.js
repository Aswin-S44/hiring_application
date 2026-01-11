const Job = require("../../models/Jobs");

module.exports.getJobDetailsByCompanyId = async (req, res) => {
  try {
    const { companyId, jobId } = req.params;

    const job = await Job.findOne({
      _id: jobId,
      company: companyId,
      isActive: true,
    }).populate("company");

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found for this company",
      });
    }

    return res.status(200).json({
      success: true,
      data: job,
    });
  } catch (error) {
    console.log("Error while getting company job details : ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
