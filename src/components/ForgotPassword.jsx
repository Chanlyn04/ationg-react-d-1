
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";  // Import for navigation
import logo from '../assets/Images/logo.png';
import backArrow from '../assets/Images/left.png'; // Add back arrow image

const ForgotPassword = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-containers">
          <Image src={logo} alt="Logo" />
          <div>
            <span className="logo-texts">Thrive360</span>
          </div>
        </div>
        <div className="navbar-right">
          <Button variant="outline-light" className="nav-link">Sign In</Button>
          <Button variant="primary" className="nav-link sign-up">Sign Up</Button>
        </div>
      </nav>

      {/* Password Card */}
      <Container fluid className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
        <Row className="w-100">
          {/* Left Side - Forgot Password Form */}
          <Col md={5} className="d-flex justify-content-center align-items-center">
            <Card className="p-4 shadow-sm position-relative" style={{ maxWidth: "400px", width: "100%", borderRadius: "12px", background: "#F0E8E8" }}>
              
              {/* Back Arrow */}
              <div 
                className="position-absolute" 
                style={{ top: "15px", left: "15px", cursor: "pointer" }} 
                onClick={() => navigate(-1)}
              >
                <Image src={backArrow} alt="Back"  width={24} height={24} />
              </div>

              <Card.Body className="text-center">
                {/* Logo */}
                <Image src={logo} alt="Thrive360 Logo" width={100} height={100} className="mb-3" />

                {/* Title */}
                <h3 className="fw-bold text-dark">Thrive360</h3>
                <p className="text-muted">Reset password by entering the email address</p>

                {/* Form */}
                <Form>
                  <Form.Group className="mb-3 text-start">
                    <Form.Label className="fw-bold">Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="e.g.user@domain.com"
                      className="rounded-3 border-0 shadow-sm"
                      style={{ background: "#e8e6e3", padding: "12px" }}
                    />
                  </Form.Group>

                  {/* Resend Button */}
                  <Button variant="success" className="w-100 rounded-3 fw-bold py-2">Resend</Button>
                </Form>

                {/* Signup Link */}
                <p className="text-center mt-3">
                  Don’t have an account? <a href="/SignUp" className="text-success fw-bold">Sign up</a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

     
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

export default ForgotPassword;
