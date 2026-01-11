const Job = require("../../models/Jobs");

module.exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }

    const job = await Job.findById(id).populate(
      "company",
      "companyName location industry website"
    );

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Optional: hide inactive jobs for public users
    if (!job.isActive || job.status === "Closed") {
      return res.status(403).json({
        success: false,
        message: "This job is no longer available",
      });
    }

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    console.error("Get job by ID error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
