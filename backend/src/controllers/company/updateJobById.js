const Job = require("../../models/Jobs");
const mongoose = require("mongoose");

module.exports.updateJobById = async (req, res) => {
  try {
    const { jobId } = req.params;

    const updatedJob = await Job.findOneAndUpdate(
      {
        _id: jobId,

        isActive: true,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found or not authorized to update",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedJob,
    });
  } catch (error) {
    console.log("Error while updating job : ", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
