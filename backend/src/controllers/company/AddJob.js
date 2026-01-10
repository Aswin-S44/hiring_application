const Job = require("../../models/Jobs");

module.exports.AddJob = async (req, res) => {
  try {
    const job = await Job.create({
      company: req.body.company,
      title: req.body.title,
      description: req.body.description,
      responsibilities: req.body.responsibilities,
      requirements: req.body.requirements,
      jobType: req.body.jobType,
      workMode: req.body.workMode,
      location: req.body.location,
      salary: req.body.salary,
      experience: req.body.experience,
      skills: req.body.skills,
      totalOpenings: req.body.totalOpenings,
      status: req.body.status,
      isActive: req.body.isActive,
      expiresAt: req.body.expiresAt,
      tags: req.body.tags,
    });

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
