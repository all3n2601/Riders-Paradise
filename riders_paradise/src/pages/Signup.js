import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Signup.css";
import img from "../assets/img_avatar2.png";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pincode, setPincode] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
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
          navigate("/home");
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Passwords Dont Match");
    }
  };
  return (
    <div className="main">
      <div className="box">
        <span className="borderLine"></span>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              required="required"
            ></input>
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox">
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
          <div className="inputBox">
            <input type="password" required="required"></input>
            <span>ReEnter Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="number"></input>
            <span>Country Zip Code</span>
            <i></i>
          </div>
          <div className="links">
            <Link className="signin" to="/Login">
              Already have an account
            </Link>
          </div>
          <input className="login" type="submit" value="Register"></input>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
