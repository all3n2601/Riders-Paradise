import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Signin.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  loginFailed,
  loginState,
  loginSuccess,
  loginProgress
} from "../../redux/userSlice";


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const handleSubmit = (e) => {
    dispatch(loginProgress());
    e.preventDefault();
    axios
      .post("https://riders-paradise.onrender.com/login", { email, password })
      .then((result) => {
        if (result.data.status === "Success") {
          const user = result.data.user;
          if (result.data.role === "admin") {
            dispatch(loginState(user));
            navigate("/admin");
            dispatch(loginSuccess());
          } else {
            dispatch(loginState(user));
            navigate("/user/home");
            dispatch(loginSuccess());
            
          }
        }
      })
      .catch((err) => {
        dispatch(loginFailed());
        Swal.fire({
          title: "Invalid Credentials!",
          icon: "error",
          confirmButtonText: "Ok",
          text: "Please Check Your Credentials and Try Again!",
        });
      });
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
