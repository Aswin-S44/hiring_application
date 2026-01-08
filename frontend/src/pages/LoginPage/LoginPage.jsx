import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-screen">
      <div className="auth-outer">
        <div className="auth-card">
          <div className="auth-form-area">
            <div className="auth-header">
              <div className="brand-logo">
                <span className="logo-dot"></span>
                Jobtale
              </div>
              <h1>Welcome back</h1>
              <p>Please enter your details to sign in.</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label>Email Address</label>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <div className="label-split">
                  <label>Password</label>
                  <a href="#" className="text-link">
                    Forgot?
                  </a>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-wrap">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Remember for 30 days
                </label>
              </div>

              <button type="submit" className="btn-primary-auth">
                Sign In
              </button>

              <button type="button" className="btn-google">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt=""
                />
                Sign in with Google
              </button>
            </form>

            <div className="auth-footer">
              <p>
                Don't have an account?{" "}
                <a href="/signup" className="text-link bold">
                  Sign up
                </a>
              </p>
            </div>
          </div>

          <div className="auth-visual-area">
            <div className="visual-content">
              <div className="testimonial-bubble">
                <div className="stars">★★★★★</div>
                <p>
                  "This platform helped me find a Senior Role at Linear in just
                  2 weeks. The interface is amazing!"
                </p>
                <div className="user-meta">
                  <div className="user-img"></div>
                  <div>
                    <strong>Sarah Jenkins</strong>
                    <span>Product Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
