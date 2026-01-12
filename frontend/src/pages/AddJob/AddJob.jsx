import React, { useState, useEffect } from "react";
import "./AddJob.css";
import baseUrl from "../../contants/baseUrl";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/AuthContext";

function AddJob({ jobId, onComplete }) {
  const { profile } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
  });

  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [respInput, setRespInput] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [reqInput, setReqInput] = useState("");
  const [requirements, setRequirements] = useState([]);

  useEffect(() => {
    if (jobId) {
      const fetchJobDetails = async () => {
        try {
          const response = await fetch(
            `${baseUrl}/api/v1/company/job/${jobId}`
          );
          const data = await response.json();
          if (data.success && data.job) {
            const job = data.job;
            setFormData({
              title: job.title || "",
              description: job.description || "",
              jobType: job.jobType || "Full-time",
              workMode: job.workMode || "Onsite",
              location: {
                city: job.location?.city || "",
                state: job.location?.state || "",
                country: job.location?.country || "",
              },
              salary: {
                min: job.salary?.min || "",
                max: job.salary?.max || "",
                currency: job.salary?.currency || "INR",
                isNegotiable: job.salary?.isNegotiable || false,
              },
              experience: {
                min: job.experience?.min || "",
                max: job.experience?.max || "",
              },
              totalOpenings: job.totalOpenings || 1,
              status: job.status || "Open",
              expiresAt: job.expiresAt ? job.expiresAt.split("T")[0] : "",
            });
            setSkills(job.skills || []);
            setResponsibilities(job.responsibilities || []);
            setRequirements(job.requirements || []);
          }
        } catch (error) {
          console.error("Error fetching job:", error);
        }
      };
      fetchJobDetails();
    }
  }, [jobId]);

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
    setIsLoading(true);
    const finalData = {
      ...formData,
      skills,
      responsibilities,
      requirements,
      company: profile?._id, 
    };

    const url = jobId
      ? `${baseUrl}/api/v1/company/job/${jobId}`
      : `${baseUrl}/api/v1/company/job`;

    const method = jobId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: jobId ? "Job Updated" : "Job Posted",
          text: data.message || "Operation successful",
          showConfirmButton: false,
          timer: 2000,
        });

        if (onComplete) {
          onComplete();
        } else {
          setTimeout(() => navigate("/jobs"), 2000);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: data.message || "Error processing request",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="add-job-container">
      <form className="job-form" onSubmit={handleSubmit}>
        <h2 className="form-title">{jobId ? "Edit Job" : "Post a New Job"}</h2>

        <div className="form-section">
          <label>Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="e.g. Senior Frontend Developer"
            required
            onChange={handleChange}
          />

          <div className="row">
            <div className="col">
              <label>Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
              >
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
              <select
                name="workMode"
                value={formData.workMode}
                onChange={handleChange}
              >
                {["Onsite", "Remote", "Hybrid"].map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <label>Description</label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            placeholder="Describe the role..."
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-section">
          <label>Location</label>
          <div className="row-three">
            <input
              type="text"
              name="location.city"
              value={formData.location.city}
              placeholder="City"
              onChange={handleChange}
            />
            <input
              type="text"
              name="location.state"
              value={formData.location.state}
              placeholder="State"
              onChange={handleChange}
            />
            <input
              type="text"
              name="location.country"
              value={formData.location.country}
              placeholder="Country"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section">
          <div className="row">
            <div className="col">
              <label>Experience (Min - Max Years)</label>
              <div className="row">
                <input
                  type="number"
                  name="experience.min"
                  value={formData.experience.min}
                  placeholder="Min"
                  required
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="experience.max"
                  value={formData.experience.max}
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
                  value={formData.salary.min}
                  placeholder="Min"
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="salary.max"
                  value={formData.salary.max}
                  placeholder="Max"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <label>Skills Required</label>
          <div className="dynamic-input">
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Add skill"
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

        <div className="form-section">
          <div className="row-three">
            <div className="col">
              <label>Total Openings</label>
              <input
                type="number"
                name="totalOpenings"
                value={formData.totalOpenings}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label>Expiry Date</label>
              <input
                type="date"
                name="expiresAt"
                value={formData.expiresAt}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label>Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Open">Open</option>
                <option value="Draft">Draft</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Processing..." : jobId ? "Update Job" : "Post Job"}
        </button>
      </form>
    </div>
  );
}

export default AddJob;
