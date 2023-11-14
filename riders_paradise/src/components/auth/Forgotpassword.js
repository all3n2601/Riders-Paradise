import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ForgotPassword.css";

function ForgotPassword() {
  return (
    <div class="main-forgotpwd">
      <div className="box-forgotpwd">
        <span className="borderLine-forgotpwd"></span>
        <form>
          <h2>Forgot Password</h2>
          <p>
            Enter the email address associated with your account and we'll send
            you a link to reset your password.
          </p>
          <div className="inputBox-forgotpwd">
            <input type="email" required="required"></input>
            <span>Email</span>
            <i></i>
          </div>
          <div className="links-forgotpwd">
            <Link className="signup-forgotpwd" to="/signup">
              Don't have a account
            </Link>
          </div>
          <input className="login-forgotpwd" type="submit" value="Send"></input>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
