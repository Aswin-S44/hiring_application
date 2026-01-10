const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    responsibilities: [
      {
        type: String,
      },
    ],

    requirements: [
      {
        type: String,
      },
    ],

    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship", "Freelance"],
      required: true,
    },

    workMode: {
      type: String,
      enum: ["Onsite", "Remote", "Hybrid"],
      required: true,
    },

    location: {
      city: String,
      state: String,
      country: String,
    },

    salary: {
      min: Number,
      max: Number,
      currency: {
        type: String,
        default: "INR",
      },
      isNegotiable: {
        type: Boolean,
        default: false,
      },
    },

    experience: {
      min: {
        type: Number,
        required: true,
      },
      max: Number,
    },

    skills: [
      {
        type: String,
        required: true,
      },
    ],

    totalOpenings: {
      type: Number,
      default: 1,
    },

    status: {
      type: String,
      enum: ["Draft", "Open", "Closed"],
      default: "Open",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    expiresAt: {
      type: Date,
    },

    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
