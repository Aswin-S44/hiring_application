import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./LoginPage.css";
import baseUrl from "../../contants/baseUrl";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${baseUrl}/api/v1/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        // localStorage.setItem("userData", JSON.stringify(data.user));

        Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Login successful. Redirecting...",
          showConfirmButton: false,
          timer: 2000,
          background: "#ffffff",
          color: "#101828",
          iconColor: "#304b66",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.message || "Invalid credentials",
          confirmButtonColor: "#304b66",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#304b66",
      });
    } finally {
      setIsLoading(false);
    }
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

              <button
                type="submit"
                className="btn-primary-auth"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
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
