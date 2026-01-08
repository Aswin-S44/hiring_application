import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

function AboutUs() {
  const stats = [
    { label: "Active Jobs", value: "15k+" },
    { label: "Top Companies", value: "8k+" },
    { label: "Successful Hires", value: "120k+" },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-image-side"
          >
            <div className="image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team working"
              />
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="exp-text">Years of Excellence</span>
              </div>
            </div>
            <div className="blob-decoration"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-content-side"
          >
            <span className="about-badge">ABOUT JOBTALE</span>
            <h2 className="about-title">
              We help you find the <span>right fit</span> for your career
            </h2>
            <p className="about-description">
              Jobtale started with a simple mission: to bridge the gap between
              world-class talent and visionary companies. We believe that
              finding a job shouldn't just be about a paycheck—it should be
              about finding a place where you belong and grow.
            </p>

            <div className="about-stats-row">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="about-features-list">
              <div className="feat-line">
                <div className="check-icon">✓</div>
                <span>Verified employers only</span>
              </div>
              <div className="feat-line">
                <div className="check-icon">✓</div>
                <span>Direct communication with recruiters</span>
              </div>
              <div className="feat-line">
                <div className="check-icon">✓</div>
                <span>AI-powered job matching system</span>
              </div>
            </div>

            <button className="btn-learn-more">Learn Our Story</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
