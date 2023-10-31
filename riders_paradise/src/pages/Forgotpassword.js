import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/img_avatar2.png";
import "../assets/styles/ForgotPassword.css";

function ForgotPassword() {
  return (
    <div>
      {/* header starts here */}
      <div className="header"></div>
      {/* header ends here */}

      {/* main content starts here */}
      <div class="main">
        <div class="content">
          <form action="POST">
            <div className="imgcontainer">
              <img className="avatar" src={img} alt="Avatar" />
            </div>
            <p>
              Enter the email address associated with your account
              <br />
              and we'll send you a link to reset your password.
            </p>
            <div class="container">
              <label for="email">
                <b>Email</b>
              </label>
              <br />
              <input type="email" placeholder="Enter Email" id="email" />
              <br />
              <button type="submit" className="conbtn">
                Continue
              </button>
              <br />
            </div>
            <div class="cancelcontainer">
              <Link className="dacc" to="/signup">
                Don't have a account?
              </Link>
              <br />
              <button type="button" class="cancelbtn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* main content ends here */}

      {/* footer starts here */}
      <div className="footer"></div>
      {/* footer ends here */}
    </div>
  );
}

export default ForgotPassword;
