import React, { useState } from "react";
import {
  Home,
  Briefcase,
  Users,
  Settings,
  Plus,
  Search,
  Bell,
  Menu,
  X,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react";
import "./CompanyDashboard.css";
import AddJob from "../AddJob/AddJob";
import AllJobs from "../AllJobs/AllJobs";
import JobDetailsByCompany from "../JobDetailsByCompany/JobDetailsByCompany";

const HomeView = () => (
  <div className="view-fade-in">
    <div className="stats-container">
      <div className="glass-card stat-item">
        <div className="stat-icon-wrapper blue">
          <TrendingUp size={20} />
        </div>
        <div>
          <p className="stat-label">Total Applications</p>
          <h2 className="stat-value">2,840</h2>
          <span className="stat-trend">+12.5% from last month</span>
        </div>
      </div>
      <div className="glass-card stat-item">
        <div className="stat-icon-wrapper green">
          <Briefcase size={20} />
        </div>
        <div>
          <p className="stat-label">Active Postings</p>
          <h2 className="stat-value">14</h2>
          <span className="stat-trend">3 closing soon</span>
        </div>
      </div>
      <div className="glass-card stat-item">
        <div className="stat-icon-wrapper purple">
          <Users size={20} />
        </div>
        <div>
          <p className="stat-label">Interviews</p>
          <h2 className="stat-value">48</h2>
          <span className="stat-trend">8 scheduled today</span>
        </div>
      </div>
    </div>

    <div className="dashboard-main-grid">
      <div className="glass-card section-card">
        <div className="card-header">
          <h3>Recent Applicants</h3>
          <button className="text-btn">View All</button>
        </div>
        <div className="applicant-list">
          {[
            {
              name: "Sarah Jenkins",
              role: "UI Designer",
              time: "2m ago",
              initial: "SJ",
            },
            {
              name: "Michael Chen",
              role: "Fullstack Dev",
              time: "15m ago",
              initial: "MC",
            },
            {
              name: "Amelia Frost",
              role: "Product Manager",
              time: "1h ago",
              initial: "AF",
            },
          ].map((user, i) => (
            <div key={i} className="list-item">
              <div className="user-info">
                <div className="user-avatar-sm">{user.initial}</div>
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.role}</p>
                </div>
              </div>
              <span className="time-tag">{user.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CandidatesView = () => (
  <div className="view-fade-in">
    <div className="view-title-row">
      <h2>Candidate Pipeline</h2>
      <div className="search-box">
        <Search size={18} />
        <input type="text" placeholder="Search talent..." />
      </div>
    </div>
    <div className="glass-card table-wrapper">
      <table className="modern-table">
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Role Applied</th>
            <th>Stage</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Robert Fox</td>
            <td>Backend Dev</td>
            <td>
              <span className="stage-pill">Interview</span>
            </td>
            <td>
              <span className="score">9.2</span>
            </td>
          </tr>
          <tr>
            <td>Jane Cooper</td>
            <td>Frontend Dev</td>
            <td>
              <span className="stage-pill">Technical</span>
            </td>
            <td>
              <span className="score">8.8</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

  const menuItems = [
    { id: "Home", icon: <Home size={20} /> },
    { id: "All Jobs", icon: <Briefcase size={20} /> },
    { id: "Candidates", icon: <Users size={20} /> },
    { id: "Settings", icon: <Settings size={20} /> },
  ];

  const navigateTo = (tab, jobId = null) => {
    setActiveTab(tab);
    setSelectedJobId(jobId);
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-layout">
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <aside className={`main-sidebar ${isSidebarOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">H</div>
          <span>HireHub</span>
        </div>

        <nav className="side-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`side-link ${activeTab === item.id ? "active" : ""}`}
              onClick={() => navigateTo(item.id)}
            >
              {item.icon}
              <span>{item.id}</span>
              {activeTab === item.id && (
                <ChevronRight size={16} className="active-arrow" />
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-user">
          <div className="user-box">
            <div className="user-avatar">JD</div>
            <div className="user-meta">
              <p>John Doe</p>
              <span>Recruiter</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="content-wrapper">
        <header className="content-header">
          <button
            className="mobile-toggle"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="header-search">
            <Search size={18} />
            <input type="text" placeholder="Search anything..." />
          </div>

          <div className="header-tools">
            <button className="tool-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <div className="vertical-divider"></div>
            <button
              className="post-job-btn-top"
              onClick={() => navigateTo("Add_Job")}
            >
              Post Job
            </button>
          </div>
        </header>

        <section className="view-content">
          {activeTab === "Home" && <HomeView />}

          {activeTab === "All Jobs" && (
            <div className="view-fade-in">
              <div className="view-title-row">
                <h2>Active Job Listings</h2>
              </div>
              <AllJobs onAction={navigateTo} />
            </div>
          )}

          {activeTab === "Candidates" && <CandidatesView />}

          {activeTab === "Settings" && (
            <div className="view-fade-in">
              <h2>Settings Page</h2>
              <p>Configuration options here.</p>
            </div>
          )}

          {activeTab === "Add_Job" && <AddJob />}

          {activeTab === "View_Job" && (
            <div className="view-fade-in">
              <button onClick={() => setActiveTab("All Jobs")}>Back</button>
              <h2>Job Details</h2>

              <JobDetailsByCompany jobId={selectedJobId} />
            </div>
          )}

          {activeTab === "Edit_Job" && (
            <div className="view-fade-in">
              <button onClick={() => setActiveTab("All Jobs")}>Back</button>
              <h2>Edit Job</h2>
              <p>Editing Job ID: {selectedJobId}</p>
            </div>
          )}

          {activeTab === "Job_Candidates" && (
            <div className="view-fade-in">
              <button onClick={() => setActiveTab("All Jobs")}>Back</button>
              <h2>Applicants for Job</h2>
              <p>List of candidates for Job ID: {selectedJobId}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default CompanyDashboard;
