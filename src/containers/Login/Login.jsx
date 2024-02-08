import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"; // Import your component-specific CSS file

const Login = () => {
  const [formType, setFormType] = useState("signup");

  const handleSlideChange = (event) => {
    setFormType(event.target.id);
  };
  return (
    <div className="Loginbody">
      <div className="wrapper">
        <div className="titlee-text">
        {formType === "login" && (
          <div className="loginTitle">
            Login Form
          </div>
        )}
      {formType === "signup" && (
          <div className="signupTitle">
            Signup Form
          </div>
      )}
        </div>

        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={formType === "login"}
              onChange={handleSlideChange}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={formType === "signup"}
              onChange={handleSlideChange}
            />
            <label
              htmlFor="login"
              className={`slide login ${formType === "login" ? "active" : ""}`}
            >
              Login
            </label>
            <label
              htmlFor="signup"
              className={`slide signup ${
                formType === "signup" ? "active" : ""
              }`}
            >
              Signup
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            {formType === "login" && (
              <form
                action="#"
                className={`login ${formType === "login" ? "active" : ""}`}
              >
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="field btn">
                  <Link to="/">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                  </Link>
                </div>
                <div className="signup-link">
                  Not a member? <a href="">Signup now</a>
                </div>
              </form>
            )}
            {formType === "signup" && (
              <form
                action="#"
                className={`signup ${formType === "signup" ? "active" : ""}`}
              >
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="field">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    required
                  />
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <input type="submit" value="Signup" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
