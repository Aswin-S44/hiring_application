import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main-container">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <div className="footer-logo">
              <div className="logo-box">J</div>
              <span className="logo-name">Jobtale</span>
            </div>
            <p className="brand-pitch">
              Connecting the world's best talent with the most innovative
              companies. Your next big career move starts right here.
            </p>
            <div className="newsletter-box">
              <input type="email" placeholder="Enter your email" />
              <button>Join</button>
            </div>
          </div>

          <div className="footer-navigation">
            <div className="nav-col">
              <h3>For Candidates</h3>
              <ul>
                <li>
                  <a href="#jobs">Browse Jobs</a>
                </li>
                <li>
                  <a href="#categories">Job Categories</a>
                </li>
                <li>
                  <a href="#resume">Resume Builder</a>
                </li>
                <li>
                  <a href="#alerts">Job Alerts</a>
                </li>
              </ul>
            </div>

            <div className="nav-col">
              <h3>For Employers</h3>
              <ul>
                <li>
                  <a href="#post">Post a Job</a>
                </li>
                <li>
                  <a href="#hiring">Hiring Solutions</a>
                </li>
                <li>
                  <a href="#pricing">Pricing Plans</a>
                </li>
                <li>
                  <a href="#resources">Resources</a>
                </li>
              </ul>
            </div>

            <div className="nav-col">
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#about">Our Story</a>
                </li>
                <li>
                  <a href="#careers">Careers</a>
                </li>
                <li>
                  <a href="#blog">Latest News</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-lower">
          <div className="legal-info">
            <p>© 2026 Jobtale Inc. Crafted for professionals.</p>
            <div className="legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="dot-sep"></span>
              <a href="#terms">Terms of Service</a>
              <span className="dot-sep"></span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>

          <div className="social-stack">
            <a href="/twitter" className="social-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              Twitter
            </a>
            <a href="/linkedin" className="social-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              Linkedin
            </a>
            <a href="/instagram" className="social-btn">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
