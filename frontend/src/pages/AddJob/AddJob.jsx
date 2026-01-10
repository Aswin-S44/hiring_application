import React, { useState } from "react";
import "./AddJob.css";
import baseUrl from "../../contants/baseUrl";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";

function AddJob() {
  const { user, loading, logout, profile } = useAuth();

  console.log("USER-----------", user ? user : "no user");
  console.log("PROFILE---------", profile);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    jobType: "Full-time",
    workMode: "Onsite",
    location: { city: "", state: "", country: "" },
    salary: { min: "", max: "", currency: "INR", isNegotiable: false },
    experience: { min: "", max: "" },
    totalOpenings: 1,
    status: "Open",
    expiresAt: "",
    company: "", // Usually passed from context or a selection
  });

  // States for dynamic array inputs
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [respInput, setRespInput] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [reqInput, setReqInput] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === "checkbox" ? checked : value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addItem = (item, setItem, list, setList) => {
    if (item.trim()) {
      setList([...list, item.trim()]);
      setItem("");
    }
  };

  const removeItem = (index, list, setList) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      skills,
      responsibilities,
      requirements,
      company: profile?._id,
    };
    console.log("Job Submitted:", finalData);
    try {
      const response = await fetch(`${baseUrl}/api/v1/company/job`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Job Posted",
          text: "Succesfully addded your Job",
          showConfirmButton: false,
          timer: 2000,
          background: "#ffffff",
          color: "#101828",
          iconColor: "#304b66",
        });

        setTimeout(() => {
          navigate("/jobs");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Adding job Failed",
          text: data.message || "Error while adding job.",
          confirmButtonColor: "#304b66",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#304b66",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-job-container">
      <form className="job-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Post a New Job</h2>

        {/* Basic Info */}
        <div className="form-section">
          <label>Job Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Senior Frontend Developer"
            required
            onChange={handleChange}
          />

          <div className="row">
            <div className="col">
              <label>Job Type</label>
              <select name="jobType" onChange={handleChange}>
                {[
                  "Full-time",
                  "Part-time",
                  "Contract",
                  "Internship",
                  "Freelance",
                ].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <label>Work Mode</label>
              <select name="workMode" onChange={handleChange}>
                {["Onsite", "Remote", "Hybrid"].map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="form-section">
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Describe the role..."
            required
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Location */}
        <div className="form-section">
          <label>Location</label>
          <div className="row-three">
            <input
              type="text"
              name="location.city"
              placeholder="City"
              onChange={handleChange}
            />
            <input
              type="text"
              name="location.state"
              placeholder="State"
              onChange={handleChange}
            />
            <input
              type="text"
              name="location.country"
              placeholder="Country"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Experience & Salary */}
        <div className="form-section">
          <div className="row">
            <div className="col">
              <label>Experience (Min - Max Years)</label>
              <div className="row">
                <input
                  type="number"
                  name="experience.min"
                  placeholder="Min"
                  required
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="experience.max"
                  placeholder="Max"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col">
              <label>Salary Range ({formData.salary.currency})</label>
              <div className="row">
                <input
                  type="number"
                  name="salary.min"
                  placeholder="Min"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="salary.max"
                  placeholder="Max"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Skills */}
        <div className="form-section">
          <label>Skills Required</label>
          <div className="dynamic-input">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Add a skill and press Add"
            />
            <button
              type="button"
              onClick={() =>
                addItem(skillInput, setSkillInput, skills, setSkills)
              }
            >
              Add
            </button>
          </div>
          <div className="tag-container">
            {skills.map((s, i) => (
              <span key={i} className="tag">
                {s}{" "}
                <i onClick={() => removeItem(i, skills, setSkills)}>&times;</i>
              </span>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="form-section">
          <label>Responsibilities</label>
          <div className="dynamic-input">
            <input
              type="text"
              value={respInput}
              onChange={(e) => setRespInput(e.target.value)}
              placeholder="Add responsibility"
            />
            <button
              type="button"
              onClick={() =>
                addItem(
                  respInput,
                  setRespInput,
                  responsibilities,
                  setResponsibilities
                )
              }
            >
              Add
            </button>
          </div>
          <ul className="list-preview">
            {responsibilities.map((r, i) => (
              <li key={i}>
                {r}{" "}
                <span
                  onClick={() =>
                    removeItem(i, responsibilities, setResponsibilities)
                  }
                >
                  Remove
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Meta info */}
        <div className="form-section">
          <div className="row-three">
            <div className="col">
              <label>Total Openings</label>
              <input
                type="number"
                name="totalOpenings"
                defaultValue="1"
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label>Expiry Date</label>
              <input type="date" name="expiresAt" onChange={handleChange} />
            </div>
            <div className="col">
              <label>Status</label>
              <select name="status" onChange={handleChange}>
                <option value="Open">Open</option>
                <option value="Draft">Draft</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Post Job
        </button>
      </form>
    </div>
  );
}

export default AddJob;
