import React from "react";
import { motion } from "framer-motion";
import "./WhyChoose.css";

function WhyChoose() {
  const features = [
    {
      title: "Innovative Solutions",
      desc: "Pioneering career growth through cutting-edge matching technology.",
      icon: "🚀",
      color: "rgba(79, 70, 229, 0.1)",
    },
    {
      title: "Detailed Insights",
      desc: "Offering deep data into salary trends and career trajectories.",
      icon: "📈",
      color: "rgba(16, 185, 129, 0.1)",
    },
    {
      title: "Tailored Solutions",
      desc: "Personalized job alerts for your unique professional skillset.",
      icon: "🎯",
      color: "rgba(245, 158, 11, 0.1)",
    },
    {
      title: "Strategic Market",
      desc: "Transforming your search with high-level industry market data.",
      icon: "💎",
      color: "rgba(139, 92, 246, 0.1)",
    },
  ];

  return (
    <section className="wc-section">
      <div className="wc-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wc-header"
        >
          <span className="wc-badge">WHY WE STAND OUT</span>
          <h2 className="wc-title">
            Unlock your potential with <span>Jobtale</span>
          </h2>
          <p className="wc-subtitle">
            Powerful features to help you manage your career like a pro.
          </p>
        </motion.div>

        <div className="wc-visual-container">
          <div className="wc-scene">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="floating-card status-card"
            >
              <div className="status-header">
                <div className="status-dot"></div>
                <span>Application Status</span>
              </div>
              <div className="status-item">
                <span className="label">Interviews</span>
                <span className="value">12</span>
              </div>
              <div className="status-bar">
                <div className="fill w-70"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="main-mockup"
            >
              <div className="mockup-nav">
                <div className="nav-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="nav-search-bar"></div>
              </div>
              <div className="mockup-content">
                <div className="profile-row">
                  <div className="profile-img"></div>
                  <div className="profile-txt">
                    <div className="line long"></div>
                    <div className="line short"></div>
                  </div>
                </div>
                <div className="content-grid">
                  <div className="grid-box"></div>
                  <div className="grid-box"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="floating-card chart-card"
            >
              <span className="chart-label">Profile Strength</span>
              <div className="circular-progress">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    className="circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray="85, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="percentage">85%</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="floating-user user-1"
            >
              <img src="https://i.pravatar.cc/100?img=32" alt="job-match" />
              <span>Job Match Found!</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="floating-user user-2"
            >
              <img src="https://i.pravatar.cc/100?img=44" alt="job-applied" />
              <span>Applied at Google</span>
            </motion.div>
          </div>
        </div>

        <div className="wc-feature-grid">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card"
            >
              <div
                className="icon-wrapper"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
