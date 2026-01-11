import React, { useEffect, useState } from "react";
import "./JobDetailsByCompany.css";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import baseUrl from "../../contants/baseUrl";

function JobDetailsByCompany({ jobId }) {
  const { profile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        if (profile && profile._id && jobId) {
          const res = await fetch(
            `${baseUrl}/api/v1/company/${profile._id}/job/${jobId}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
          const data = await res.json();
          if (data && data.success) {
            setJob(data.data);
          }
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [profile, jobId]);

  if (loading)
    return (
      <div className="bento-loader">
        <span></span>
      </div>
    );
  if (!job) return <div className="bento-error">Job post not found.</div>;

  return (
    <div className="bento-container">
      <div className="bento-grid">
        <div className="bento-card header-main-card">
          <div className="badge-row">
            <span className={`status-tag ${job.status.toLowerCase()}`}>
              {job.status}
            </span>
            <span className="type-tag">{job.jobType}</span>
          </div>
          <h1 className="job-title-display">{job.title}</h1>
          <p className="company-info-text">
            Managed by <strong>{job.company.companyName}</strong>
            <span className="dot-sep"></span>
            {job.location.city}, {job.location.country}
          </p>
        </div>

        <div className="bento-card salary-card">
          <label>Annual Compensation</label>
          <div className="amount-display">
            {job.salary.currency} {job.salary.min}L - {job.salary.max}L
          </div>
          <p className="negotiable-text">
            {job.salary.isNegotiable ? "✓ Negotiable" : "Fixed Range"}
          </p>
        </div>

        <div className="bento-card experience-card">
          <label>Experience Required</label>
          <div className="exp-display">
            {job.experience.min} - {job.experience.max} <span>Years</span>
          </div>
        </div>

        <div className="bento-card description-card">
          <h3>Description</h3>
          <p>{job.description}</p>
        </div>

        <div className="bento-card sidebar-card info-summary">
          <div className="summary-item">
            <span className="icon">📍</span>
            <div>
              <p>Work Mode</p>
              <strong>{job.workMode}</strong>
            </div>
          </div>
          <div className="summary-item">
            <span className="icon">👥</span>
            <div>
              <p>Openings</p>
              <strong>{job.totalOpenings} Positions</strong>
            </div>
          </div>
          <div className="summary-item">
            <span className="icon">📅</span>
            <div>
              <p>Expiry Date</p>
              <strong>{new Date(job.expiresAt).toLocaleDateString()}</strong>
            </div>
          </div>
        </div>

        <div className="bento-card skills-card">
          <h3>Tech Stack</h3>
          <div className="skills-wrap">
            {job.skills.map((skill, i) => (
              <span key={i} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bento-card list-card">
          <h3>Responsibilities</h3>
          <ul className="bento-list">
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsByCompany;
