import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-main">
        <div
          className="nav-logo"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <div className="logo-icon">J</div>
          <span>Jobtale</span>
        </div>

        <div className={`nav-menu ${isOpen ? "open" : ""}`}>
          <a href="/jobs">Find Jobs</a>
          <a href="/companies">Companies</a>
          <a href="/activity">Activity</a>
          <div className="nav-mobile-btns">
            <button
              className="btn-secondary"
              onClick={() => {
                window.location.href = "/signin";
              }}
            >
              Log In
            </button>
            <button
              className="btn-primary"
              onClick={() => {
                window.location.href = "/signup";
              }}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="nav-actions">
          <button
            className="btn-secondary hide-mobile"
            onClick={() => {
              window.location.href = "/signin";
            }}
          >
            Log In
          </button>
          <button
            className="btn-primary hide-mobile"
            onClick={() => {
              window.location.href = "/signup";
            }}
          >
            Sign Up
          </button>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span className={isOpen ? "line active" : "line"}></span>
            <span className={isOpen ? "line active" : "line"}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
