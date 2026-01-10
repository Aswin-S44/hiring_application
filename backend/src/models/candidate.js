const mongoose = require("mongoose");
const candidateProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: String,
    location: String,
    experience: {
      type: Number, // years
      default: 0,
    },
    skills: [String],
    resumeUrl: String,
    education: [
      {
        degree: String,
        institute: String,
        year: Number,
      },
    ],
    preferredJobTypes: {
      type: [String],
      enum: ["FULL_TIME", "PART_TIME", "INTERNSHIP", "FREELANCE"],
    },
    expectedSalary: Number,
    openToWork: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Candidate = mongoose.model("Candiate", candidateProfileSchema);
module.exports = Candidate;
