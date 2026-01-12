const Job = require("../../models/Jobs");

module.exports.deleteJobById = async (req, res) => {
  try {
    const { jobId } = req.params;
    const companyId = req.user?.id;

    const deletedJob = await Job.findOneAndDelete({
      _id: jobId,
      //   company: companyId,
    });

    if (!deletedJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found or not authorized to delete",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Job deleted successfully",
      data: deletedJob,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
