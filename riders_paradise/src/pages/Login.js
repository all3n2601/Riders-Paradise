import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Signin.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((result) => {
        console.log(result);

        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign in</h2>
          <div className="inputBox">
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
          <div className="inputBox">
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
          <div className="links">
            <Link to="/forgotpwd">Forgot Password</Link>
            <Link className="signup" to="/signup">
              Don't have a account
            </Link>
          </div>
          <input className="login" type="submit" value="Login"></input>
        </form>
      </div>
    </div>
  );
}

export default Login;
