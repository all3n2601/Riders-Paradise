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
    <div className="main-signup">
      <div className="box-signup">
        <span className="borderLine-signup"></span>
        <form>
          <h2>Sign up</h2>
          <div className="inputBox-signup">
            <input type="text" required="required"></input>
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox-signup">
            <input type="email" required="required"></input>
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox-signup">
            <input type="password" required="required"></input>
            <span>Password</span>
            <i></i>
          </div>
          <div className="inputBox-signup">
            <input type="password" required="required"></input>
            <span>ReEnter Password</span>
            <i></i>
          </div>
          <div className="inputBox-signup">
            <input type="number" required="required"></input>
            <span>Zip Code</span>
            <i></i>
          </div>
          <div className="links-signup">
            <Link className="login-signup" to="/login">Already have an account</Link>
          </div>
          <span className="beforebutton-signup"></span>
          <input className="register-signup" type="submit" value="Register"></input>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
