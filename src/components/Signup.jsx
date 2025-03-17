import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import logo from '../assets/Images/logo.png';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-containers" > 
        <Image 
        src={logo}
        alt="Logo" 
          />
       <div>
       <span className="logo-texts">Thrive360</span>
    </div>
      
        </div>
        <div className="navbar-right">
          <Button variant="outline-light" className="nav-link">Sign In</Button>
          <Button variant="primary" className="nav-link sign-up">Sign Up</Button>
        </div>
      </nav>

      <div className="signup-container">
      <div className="signup-card">
        {/* Logo & Title */}
        <div className="logo-containers">
        <h6 className="Signup-text">Sign up</h6>
          <img src={logo} alt="Logo" className="small-logo" />
        </div>
        
        <h2 className="title">Create an account</h2>

        <form>
          {/* Email Field */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" className="input-field" />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input type={showPassword ? "text" : "password"} placeholder="Enter password" className="input-field" />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="input-field"
              />
              <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {/* Register Button */}
          <button className="register-btn">Register</button>
        </form>

          <p className="signup-text">
           {" Already have an account?"} <a href="/SignIn" className="signup-link">Sign in</a>
          </p>
        </div>

        </div>
          

  
  {/* Footer */}
  <footer className="footer">
  <div className="footer-left">
       <span>© 2025 Thrive360. All rights reserved.</span>
      </div>

      <div className="footer-center">
      <a href="#terms">Terms and Conditions</a>
      <span>•</span>
      <a href="#privacy">Privacy Policy</a>
      <span>•</span>
      <a href="#services">Terms of Service</a>
      </div>
      <div className="footer-right">
      <span>Develop by: Ationg,Ferlita & Sanchez, Chanlyn</span>
      
      </div>
  </footer>
  </div>
  
  
);
};

export default SignUp;


