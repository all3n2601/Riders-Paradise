import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Signup.css";
import axios from "axios";

function SignUp() {
  const [userName, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === repassword) {
      axios
        .post("https://riders-paradise.onrender.com/register", {
          userName,
          email,
          password,
        })
        .then((result) => {
          console.log(result);
          navigate("/login");
        })
        .catch((err) => console.log(err));
    } else {
      setError("Passwords Dont Match!");
    }
  };
  return (
    <div className="main-signup">
      <div className="box-signup">
        <span className="borderLine-signup"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          {error && <div className="error-message">{error}</div>}
          <div className="inputBox-signup">
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required="required"
            ></input>
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox-signup">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required="required"
            ></input>
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox-signup">
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
          <div className="inputBox-signup">
            <input
              type="password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
              required="required"
            ></input>
            <span>ReEnter Password</span>
            <i></i>
          </div>
          <div className="links-signup">
            <Link className="login-signup" to="/login">
              Already have an account
            </Link>
          </div>
          <span className="beforebutton-signup"></span>
          <input
            className="register-signup"
            type="submit"
            value="Register"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
