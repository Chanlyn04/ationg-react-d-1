
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import logo from '../assets/Images/logo.png';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
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

      {/* Login Card */}
      <div className="Login-form">
      <div className="login-card">
        {/* Left Section - Form */}
        <div className="left-section">
          <div className="logo-container">
            <Image src={logo} alt="Logo" className="form-logo" />
          </div>
          <h1 className="title">Thrive360</h1>
          <h2 className="subtitle">Sign in</h2>

          <form className="form">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" className="input" />

            <label>Password</label>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="input"
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

            <a href="#" className="forgot-password">Forgot Password?</a>
            <button className="sign-in-btn" onClick={() => navigate("/Home")}>
      Sign in
    </button>
          </form>

          <p className="signup-text">
           {" Don't have an account?"} <a href="/SignUp" className="signup-link">Sign up</a>
          </p>
        </div>

       
          
         
         
         
        
        
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

export default SignIn;


