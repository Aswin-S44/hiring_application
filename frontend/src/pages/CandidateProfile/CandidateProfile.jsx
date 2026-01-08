import React from "react";
import "./CandidateProfile.css";

const USER_DATA = {
  name: "Alex Rivera",
  title: "Senior Full Stack Developer",
  location: "Madrid, Spain",
  email: "alex.rivera@example.com",
  phone: "+34 612 345 678",
  bio: "Passionate developer with 6+ years of experience building scalable web applications. Specialized in React, Node.js, and Cloud Architecture. Open to remote opportunities and leadership roles.",
  avatar: "AR",
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "AWS",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "System Design",
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "TechNova Solutions",
      period: "2021 - Present",
      description:
        "Leading a team of 5 developers. Architected a microservices platform that reduced latency by 40%.",
    },
    {
      role: "Full Stack Developer",
      company: "Global Stream",
      period: "2018 - 2021",
      description:
        "Developed and maintained 15+ client projects. Integrated Stripe payments and third-party APIs.",
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      school: "University of Madrid",
      year: "2018",
    },
  ],
  stats: [
    { label: "Applied", count: 12 },
    { label: "Interviews", count: 4 },
    { label: "Offers", count: 1 },
  ],
};

function CandidateProfile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-header-accent"></div>

      <div className="profile-container">
        <div className="profile-grid">
          <div className="left-column">
            <div className="profile-card hero-card">
              <div className="hero-flex">
                <div className="avatar-circle">{USER_DATA.avatar}</div>
                <div className="hero-info">
                  <h1>{USER_DATA.name}</h1>
                  <p className="main-title">{USER_DATA.title}</p>
                  <p className="loc-text">📍 {USER_DATA.location}</p>
                  <div className="hero-btns">
                    <button className="edit-btn">Edit Profile</button>
                    <button className="resume-btn">Download CV</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-card section-card">
              <h2>About Me</h2>
              <p className="bio-text">{USER_DATA.bio}</p>
            </div>

            <div className="profile-card section-card">
              <h2>Work Experience</h2>
              <div className="timeline">
                {USER_DATA.experience.map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3>{exp.role}</h3>
                        <span>{exp.period}</span>
                      </div>
                      <p className="company-sub">{exp.company}</p>
                      <p className="exp-desc">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="profile-card section-card">
              <h2>Education</h2>
              {USER_DATA.education.map((edu, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-icon">🎓</div>
                  <div className="edu-info">
                    <h3>{edu.degree}</h3>
                    <p>
                      {edu.school} • {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="right-column">
            <div className="profile-card stats-grid-card">
              {USER_DATA.stats.map((stat, i) => (
                <div key={i} className="stat-unit">
                  <span className="stat-num">{stat.count}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="profile-card info-card">
              <h3>Contact Info</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <label>Email</label>
                  <span>{USER_DATA.email}</span>
                </div>
                <div className="contact-item">
                  <label>Phone</label>
                  <span>{USER_DATA.phone}</span>
                </div>
              </div>
            </div>

            <div className="profile-card info-card">
              <h3>Skills</h3>
              <div className="skills-cloud">
                {USER_DATA.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="profile-card profile-strength">
              <div className="strength-header">
                <h3>Profile Strength</h3>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
              <p>Add your portfolio to reach 100%</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CandidateProfile;
