import React, { useEffect, useState } from "react";
import "./AllJobs.css";
import baseUrl from "../../contants/baseUrl";
import { useAuth } from "../../context/AuthContext";
import { Eye, Edit, Trash2, Users, MapPin, Briefcase } from "lucide-react";

function AllJobs() {
  const { profile } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        if (profile && profile._id) {
          const res = await fetch(
            `${baseUrl}/api/v1/company/jobs/${profile._id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();
          if (data && data.success) {
            setJobs(data.jobs);
          }
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [profile]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) return <div className="jobs-loading">Loading Dashboard...</div>;

  return (
    <div className="all-jobs-wrapper">
      <div className="jobs-page-header">
        <div className="header-text">
          <h1>Job Postings</h1>
          <p>Manage and track your active recruitment listings</p>
        </div>
        <button className="add-job-btn">Create New Job</button>
      </div>

      <div className="table-container">
        <table className="custom-jobs-table">
          <thead>
            <tr>
              <th>Job Details</th>
              <th>Configuration</th>
              <th>Experience</th>
              <th>Salary Range</th>
              <th>Status</th>
              <th className="action-column">Management</th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job._id}>
                  <td>
                    <div className="job-primary-info">
                      <span className="job-name">{job.title}</span>
                      <div className="job-sub-info">
                        <MapPin size={12} />
                        {job.location.city}, {job.location.state}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="config-info">
                      <div className="badge-outline">{job.jobType}</div>
                      <span className="work-mode-text">{job.workMode}</span>
                    </div>
                  </td>
                  <td>
                    <div className="exp-text">
                      <Briefcase size={14} />
                      {job.experience.min} - {job.experience.max} Years
                    </div>
                  </td>
                  <td>
                    <div className="salary-text">
                      {job.salary.currency} {job.salary.min.toLocaleString()} -{" "}
                      {job.salary.max.toLocaleString()}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`status-pill-ui ${job.status.toLowerCase()}`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>
                    <div className="management-actions">
                      <button className="ui-icon-btn view" title="View Details">
                        <Eye size={18} />
                      </button>
                      <button className="ui-icon-btn edit" title="Edit Job">
                        <Edit size={18} />
                      </button>
                      <button
                        className="ui-icon-btn candidates"
                        title="View Candidates"
                      >
                        <Users size={18} />
                      </button>
                      <button className="ui-icon-btn delete" title="Remove">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty-state">
                  No job postings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllJobs;
