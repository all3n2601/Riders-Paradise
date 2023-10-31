import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/Forgotpassword";

function LandingPage() {
  return (
    <div className="page">
      <div className="header">
        <Link to="/" className="logo">
          Riders Paradise
        </Link>
        <nav class="nav-items">
          <Link className="leftnav" to="/">
            Home
          </Link>
          <Link className="leftnav" to="/about">
            About
          </Link>
          <Link className="leftnav" to="/contact">
            Contact Us
          </Link>
          <Link className="sign" to="/login">
            SIGN IN
          </Link>
        </nav>
      </div>
      <div className="body"></div>
      <div className="footer"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpwd" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
