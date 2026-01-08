import React, { useState } from "react";
import "./JobDetails.css";

const JOB_DATA = {
  id: "882",
  title: "Senior Product Designer",
  company: "Linear",
  location: "Remote / London, UK",
  type: "Full-time",
  salary: "$140k – $190k",
  equity: "0.1% – 0.3%",
  logo: "L",
  brandColor: "#5e6ad2",
  posted: "Jan 08, 2026",
  description:
    "We're looking for a product designer to help us shape the future of software project management. You will work on our core product, creating high-fidelity prototypes and polished user interfaces that prioritize speed and clarity.",
  perks: [
    "Remote-first culture",
    "Health & Dental",
    "Setup Stipend",
    "Annual Offsites",
    "Parental Leave",
  ],
  requirements: [
    "4+ years of experience in product design",
    "Expertise with Figma and prototyping tools",
    "Experience working on B2B or productivity software",
    "Strong portfolio demonstrating interaction design skills",
  ],
  companyInfo: {
    about:
      "Linear is the issue tracker you actually enjoy using. We are a small, focused team building the next generation of software tools.",
    size: "50-100 employees",
    founded: "2019",
    website: "https://linear.app",
  },
};

function JobDetails() {
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="job-detail-page">
      <div className="top-accent"></div>

      <div className="container">
        <div className="layout-grid">
          <div className="main-column">
            <div className="white-card hero-section">
              <div className="hero-flex">
                <div
                  className="logo-box"
                  style={{ backgroundColor: JOB_DATA.brandColor }}
                >
                  {JOB_DATA.logo}
                </div>
                <div className="title-area">
                  <div className="badge-row">
                    <span className="hiring-badge">We're Hiring</span>
                    <span className="date-badge">{JOB_DATA.posted}</span>
                  </div>
                  <h1>{JOB_DATA.title}</h1>
                  <p className="subtitle">
                    {JOB_DATA.company} • {JOB_DATA.location}
                  </p>
                </div>
              </div>

              <div className="quick-info-grid">
                <div className="info-cell">
                  <span className="label">Salary range</span>
                  <span className="val">{JOB_DATA.salary}</span>
                </div>
                <div className="info-cell">
                  <span className="label">Equity</span>
                  <span className="val">{JOB_DATA.equity}</span>
                </div>
                <div className="info-cell">
                  <span className="label">Job type</span>
                  <span className="val">{JOB_DATA.type}</span>
                </div>
              </div>
            </div>

            <div className="white-card job-body">
              <div className="content-block">
                <h2>Description</h2>
                <p>{JOB_DATA.description}</p>
              </div>

              <div className="content-block">
                <h2>Requirements</h2>
                <ul className="bullet-list">
                  {JOB_DATA.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="content-block">
                <h2>Benefits</h2>
                <div className="tag-cloud">
                  {JOB_DATA.perks.map((perk, i) => (
                    <span key={i} className="perk-pill">
                      {perk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="side-column">
            <div className="white-card action-card">
              <button
                className={`apply-btn-large ${applied ? "applied" : ""}`}
                onClick={() => setApplied(true)}
              >
                {applied ? "Application Sent" : "Apply Now"}
              </button>
              <button
                className={`save-btn-outline ${saved ? "active" : ""}`}
                onClick={() => setSaved(!saved)}
              >
                {saved ? "★ Saved" : "☆ Save for later"}
              </button>

              <div className="divider"></div>

              <div className="company-info">
                <h3>About Company</h3>
                <p>{JOB_DATA.companyInfo.about}</p>
                <div className="meta-list">
                  <div className="meta-row">
                    <span>Size</span>
                    <strong>{JOB_DATA.companyInfo.size}</strong>
                  </div>
                  <div className="meta-row">
                    <span>Founded</span>
                    <strong>{JOB_DATA.companyInfo.founded}</strong>
                  </div>
                </div>
                <a
                  href={JOB_DATA.companyInfo.website}
                  className="web-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website ↗
                </a>
              </div>
            </div>

            <div className="white-card stats-card">
              <div className="stat-line">
                <span className="dot"></span>
                <span>
                  Active <strong>42</strong> applicants
                </span>
              </div>
              <div className="stat-line">
                <span className="dot"></span>
                <span>
                  Response time <strong>2 days</strong>
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div className="bottom-sticky">
        <div className="sticky-content">
          <div className="s-text">
            <h3>{JOB_DATA.title}</h3>
            <span>
              {JOB_DATA.company} • {JOB_DATA.salary}
            </span>
          </div>
          <button className="sticky-btn" onClick={() => setApplied(true)}>
            {applied ? "Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
