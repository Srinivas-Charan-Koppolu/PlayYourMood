import React, { useState } from "react";
import "./../styles/loginPageComponent.css";
import PYM_Logo from "./../assets/PYM_Logo.jpg";

const LoginPageComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: Send formData to Spring Boot backend
  };

  return (
    <div className="login-container">
      {/* Left Section - Login Box */}
      <div className="login-box">
        <h2 className="signin-title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="input-field"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="forgot-password">Forgot password?</div>

          {/* Login Button */}
          <button type="submit" className="login-btn">
            Login →
          </button>
        </form>
      </div>

      {/* Right Section - Logo */}
      <div className="logo-section">
        <img
          src={PYM_Logo}
          alt="Play Your Mood Logo"
          className="circle-logo"
        />
      </div>
    </div>
  );
};

export default LoginPageComponent;
