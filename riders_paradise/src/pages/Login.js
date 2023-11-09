import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Signin.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((result) => {
        console.log(result);

        if (result.data === "Success") {
          navigate("/user/explore");
        }
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="main-signin">
      <div className="box-signin">
        <span className="borderLine-signin"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="inputBox-signin">
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required="required"
            ></input>
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox-signin">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required="required"
            ></input>
            <span>Password</span>
            <i></i>
          </div>
          <div className="links-signin">
            <Link to="/password/forgot">Forgot Password</Link>
            <Link className="signup-signin" to="/signup">
              Don't have an account
            </Link>
          </div>
          <span className="beforebutton-signin"></span>
          <input className="login-signin" type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
