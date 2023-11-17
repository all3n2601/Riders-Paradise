import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Signup.css";
import axios from "axios";
import { setCurrentUser } from "./auth";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pincode, setPincode] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === repassword) {
      axios
        .post("http://localhost:4000/register", {
          name,
          email,
          pincode,
          password,
        })
        .then((result) => {
          console.log(result);
          setCurrentUser(result.data.user);
          navigate("/user/home");
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
          <div className="inputBox-signup">
            <input
              type="number"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              required="required"
            ></input>
            <span>Zip Code</span>
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
