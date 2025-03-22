
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Landing from "./pages/Landing";




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SignIn" element={<Home />} />
        <Route path="/Profile " element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

