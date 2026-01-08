import React from "react";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <span className="cta-badge">#1 JOB PORTAL</span>
        <h2 className="cta-heading">
          Discover Your Next Career <br /> Move with Ease
        </h2>

        <div className="cta-btn-group">
          <button className="btn-filled">Start job search</button>
          <button className="btn-outlined">Learn More</button>
        </div>
      </div>

      <div className="cta-bg-pattern">
        <div className="shape-left"></div>
        <div className="shape-right"></div>
      </div>
    </section>
  );
}

export default CTA;
