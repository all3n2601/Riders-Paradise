import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Signin.css";
import img from "../assets/signin.png";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      {" "}
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="imgcontainer">
            <img className="avatar" src={img} alt="Avatar" />
          </div>
          <h2>Sign In To Continue</h2>
          <div className="container">
            <label htmlFor="email">
              {" "}
              <b>Email ID</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Email ID"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <label htmlFor="password">
              {" "}
              <b>Password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="loginbtn">
              Signin
            </button>
            <br />
            <input type="checkbox" />
            <label>Remember me</label>
            <br />
          </div>
          <div className="cancelcontainer">
            {" "}
            <Link className="dacc" to="/signup">
              Don't have an account?
            </Link>
            <Link className="pass" to="/forgotpwd">
              {" "}
              Forgot password?
            </Link>
            <br />
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
