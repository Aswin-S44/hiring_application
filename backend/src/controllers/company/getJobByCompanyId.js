const Job = require("../../models/Jobs");

module.exports.getJobsByCompanyId = async (req, res) => {
  try {
    const { id: companyId } = req.params;

    const {
      page = 1,
      limit = 10,
      search,
      status,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;

    if (!companyId) {
      return res.status(400).json({
        success: false,
        message: "Company ID is required",
      });
    }

    // 🔎 Base query
    const query = {
      company: companyId,
    };

    // 🔍 Search
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // 🎯 Status filter (Open / Draft / Closed)
    if (status) {
      query.status = status;
    }

    // 📄 Pagination
    const skip = (page - 1) * limit;

    // 🔃 Sorting
    const sortOptions = {};
    sortOptions[sortBy] = order === "asc" ? 1 : -1;

    const jobs = await Job.find(query)
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
    console.error("Get jobs by company error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
