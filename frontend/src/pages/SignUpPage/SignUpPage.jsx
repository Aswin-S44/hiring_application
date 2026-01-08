import React, { useState } from "react";
import "./SignUpPage.css";

function SignUpPage() {
  const [role, setRole] = useState(null);
  const [companyType, setCompanyType] = useState("");

  const companyTypes = [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Marketing",
    "E-commerce",
    "Manufacturing",
    "Automotive",
  ];

  const RoleSelector = () => (
    <div className="selection-view">
      <div className="selection-content">
        <div className="brand-tag">Join Jobtale</div>
        <h1>
          How would you like to <span className="highlight">get started?</span>
        </h1>
        <p className="selection-subtitle">
          Create an account to unlock tailored features for your professional
          journey.
        </p>

        <div className="role-options">
          <div className="option-card" onClick={() => setRole("candidate")}>
            <div className="option-ui-visual candidate-bg">
              <div className="floating-avatar">👤</div>
            </div>
            <div className="option-text">
              <h3>Join as a Candidate</h3>
              <p>
                I am looking for my next career move and want to apply to top
                companies.
              </p>
            </div>
            <div className="option-arrow">→</div>
          </div>

          <div className="option-card" onClick={() => setRole("company")}>
            <div className="option-ui-visual company-bg">
              <div className="floating-avatar">🏢</div>
            </div>
            <div className="option-text">
              <h3>Join as a Recruiter</h3>
              <p>
                I want to post jobs, manage applications, and hire the best
                talent available.
              </p>
            </div>
            <div className="option-arrow">→</div>
          </div>
        </div>

        <div className="selection-footer">
          Already a member? <a href="/signin">Sign in here</a>
        </div>
      </div>
    </div>
  );

  const FormView = () => (
    <div className="form-view">
      <div className="form-side-content">
        <button className="back-link" onClick={() => setRole(null)}>
          ← Change account type
        </button>
        <div className="form-header-main">
          <h2>
            Create {role === "candidate" ? "Candidate" : "Company"} Account
          </h2>
          <p>Join our community of over 10,000+ professionals.</p>
        </div>

        <form className="premium-form" onSubmit={(e) => e.preventDefault()}>
          {role === "company" ? (
            <>
              <div className="input-row">
                <div className="input-field">
                  <label>Company Name</label>
                  <input type="text" placeholder="e.g. Acme Corp" required />
                </div>
              </div>
              <div className="input-row split">
                <div className="input-field">
                  <label>Company Size</label>
                  <select required>
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Company Type</label>
                  <input
                    list="company-types"
                    placeholder="Search or type..."
                    value={companyType}
                    onChange={(e) => setCompanyType(e.target.value)}
                    required
                  />
                  <datalist id="company-types">
                    {companyTypes.map((type, index) => (
                      <option key={index} value={type} />
                    ))}
                  </datalist>
                </div>
              </div>
              <div className="input-row">
                <div className="input-field">
                  <label>Company Website</label>
                  <input
                    type="url"
                    placeholder="https://company.com"
                    required
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-field">
                  <label>Company Email</label>
                  <input type="email" placeholder="hr@company.com" required />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="input-row">
                <div className="input-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
              </div>
              <div className="input-row">
                <div className="input-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="input-row">
                <div className="input-field">
                  <label>Contact Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
              </div>
            </>
          )}

          <div className="input-row split">
            <div className="input-field">
              <label>Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            <div className="input-field">
              <label>Confirm</label>
              <input type="password" placeholder="••••••••" required />
            </div>
          </div>

          <button type="submit" className="signup-submit-btn">
            Create Account
          </button>
        </form>

        <p className="terms-text">
          By signing up, you agree to our <a href="#">Terms</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>

      <div className="form-side-visual">
        <div className="visual-overlay">
          <div className="feature-card">
            <div className="feature-dot"></div>
            <p>
              <strong>
                {role === "candidate" ? "AI Job Matching" : "Smart Sourcing"}
              </strong>
            </p>
            <p className="f-desc">
              {role === "candidate"
                ? "Get recommended for roles that fit your skill set perfectly."
                : "Find candidates that match your culture and tech stack."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="signup-master-container">
      {!role ? <RoleSelector /> : <FormView />}
    </div>
  );
}

export default SignUpPage;
