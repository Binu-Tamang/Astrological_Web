// eslint-disable-next-line no-unused-vars
import React from 'react';
import './LoginForm.css'; // Custom CSS for styling
import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa';

function LoginForm() {
  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-form">
        <h3>Start your Journey</h3>
        <h2>Sign In to Subha Labh</h2>

        <div className="form-group">
          <label>E-mail</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="sign-in-btn">Sign In</button>

        <div className="or-divider">
          <span>or sign in with</span>
        </div>

        <div className="social-login">
          <FaFacebook className="icon" />
          <FaGoogle className="icon" />
          <FaApple className="icon" />
        </div>

        <p className="signup-text">
          Don&apos;t have an account? <a href="/">Sign up</a>
        </p>
      </div>

      {/* Right Section */}
      <div className="login-image">
        <img src="./assets/astronaut.jpg" alt="Astronaut Background" />
      </div>
    </div>
  );
}

export default LoginForm;
