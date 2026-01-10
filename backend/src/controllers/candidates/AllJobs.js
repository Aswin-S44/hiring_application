const Job = require("../../models/Jobs");

module.exports.getAllJobs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      jobType,
      workMode,
      city,
      state,
      country,
      minSalary,
      maxSalary,
      minExperience,
      skills,
      tags,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;

    const query = {
      isActive: true,
      status: "Open",
    };

    // 🔍 Search (title + description)
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // 🎯 Filters
    if (jobType) query.jobType = jobType;
    if (workMode) query.workMode = workMode;

    if (city) query["location.city"] = city;
    if (state) query["location.state"] = state;
    if (country) query["location.country"] = country;

    if (minSalary) query["salary.min"] = { $gte: Number(minSalary) };
    if (maxSalary)
      query["salary.max"] = {
        ...(query["salary.max"] || {}),
        $lte: Number(maxSalary),
      };

    if (minExperience)
      query["experience.min"] = { $lte: Number(minExperience) };

    if (skills) {
      query.skills = { $in: skills.split(",") };
    }

    if (tags) {
      query.tags = { $in: tags.split(",") };
    }

    // 📄 Pagination
    const skip = (page - 1) * limit;

    // 🔃 Sorting
    const sortOptions = {};
    sortOptions[sortBy] = order === "asc" ? 1 : -1;

    const jobs = await Job.find(query)
      .populate("company", "companyName location")
      .sort(sortOptions)
      .skip(skip)
      .limit(Number(limit));

    const totalJobs = await Job.countDocuments(query);

    res.status(200).json({
      success: true,
      totalJobs,
      currentPage: Number(page),
      totalPages: Math.ceil(totalJobs / limit),
      jobs,
    });
  } catch (error) {
    console.error("Get jobs error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
