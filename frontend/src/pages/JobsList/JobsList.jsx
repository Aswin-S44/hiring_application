import React, { useState, useMemo } from "react";
import "./JobsList.css";

const JOBS_DATA = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Solana",
    location: "Remote",
    type: "Full-time",
    salary: "$180k - $240k",
    category: "Engineering",
    logo: "S",
    color: "#9945FF",
    posted: "2h ago",
    featured: true,
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Airbnb",
    location: "San Francisco",
    type: "Full-time",
    salary: "$160k - $210k",
    category: "Design",
    logo: "A",
    color: "#FF5A5F",
    posted: "5h ago",
    featured: false,
  },
  {
    id: 3,
    title: "Backend Architect",
    company: "Stripe",
    location: "New York",
    type: "Contract",
    salary: "$120/hr",
    category: "Engineering",
    logo: "S",
    color: "#635BFF",
    posted: "1d ago",
    featured: false,
  },
  {
    id: 4,
    title: "Growth Manager",
    company: "Notion",
    location: "Remote",
    type: "Full-time",
    salary: "$130k - $160k",
    category: "Marketing",
    logo: "N",
    color: "#000000",
    posted: "2d ago",
    featured: true,
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Vercel",
    location: "Remote",
    type: "Full-time",
    salary: "$190k - $250k",
    category: "Engineering",
    logo: "V",
    color: "#000000",
    posted: "3d ago",
    featured: false,
  },
];

function JobsList() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [sort, setSort] = useState("latest");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const processedJobs = useMemo(() => {
    return JOBS_DATA.filter(
      (job) =>
        (job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.company.toLowerCase().includes(query.toLowerCase())) &&
        job.location.toLowerCase().includes(location.toLowerCase()) &&
        (filterType === "All" || job.type === filterType)
    ).sort((a, b) => {
      if (sort === "salary")
        return (
          parseInt(b.salary.replace(/\D/g, "")) -
          parseInt(a.salary.replace(/\D/g, ""))
        );
      return b.id - a.id;
    });
  }, [query, location, filterType, sort]);

  return (
    <div className="portal-container">
      <div className="portal-header">
        <h1 className="title-glow">
          Available <span>Opportunities</span>
        </h1>

        <div className="modern-search-bar">
          <div className="search-section">
            <span className="icon">🔍</span>
            <input
              type="text"
              placeholder="Job title..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="search-section location-input">
            <span className="icon">📍</span>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="search-btns">
            <button className="search-trigger">Search</button>
            <button
              className="mobile-filter-btn"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              Tune
            </button>
          </div>
        </div>
      </div>

      <div className="main-layout">
        <aside className={`portal-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <h3>Filters</h3>
            <button
              className="close-menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="sidebar-group">
            <label>Employment Type</label>
            <div className="filter-chips">
              {["All", "Full-time", "Contract", "Remote"].map((t) => (
                <button
                  key={t}
                  className={filterType === t ? "active" : ""}
                  onClick={() => {
                    setFilterType(t);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-group">
            <label>Sort By</label>
            <select
              className="portal-select"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setIsMobileMenuOpen(false);
              }}
            >
              <option value="latest">Latest Posted</option>
              <option value="salary">Highest Salary</option>
            </select>
          </div>

          <button
            className="apply-mobile-filters"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Show Results
          </button>
        </aside>

        <section className="jobs-stream">
          <div className="stream-info">
            <span>Showing {processedJobs.length} results</span>
          </div>

          {processedJobs.map((job) => (
            <div
              key={job.id}
              className={`ultra-job-card ${job.featured ? "featured" : ""}`}
              onClick={() => {
                window.location.href = "/job/details";
              }}
            >
              <div className="card-inner">
                <div
                  className="brand-box"
                  style={{ backgroundColor: job.color }}
                >
                  {job.logo}
                </div>

                <div className="job-details">
                  <div className="title-row">
                    <h3>{job.title}</h3>
                    {job.featured && (
                      <span className="featured-badge">Featured</span>
                    )}
                  </div>
                  <p className="meta-text">
                    {job.company} • {job.location}
                  </p>

                  <div className="attribute-row">
                    <span className="attr-tag">{job.type}</span>
                    <span className="attr-tag salary">{job.salary}</span>
                    <span className="attr-tag category">{job.category}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <span className="posted-label">{job.posted}</span>
                  <div className="btn-group">
                    <button className="save-icon-btn">♡</button>
                    <button className="apply-trigger">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      {isMobileMenuOpen && (
        <div
          className="overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default JobsList;
