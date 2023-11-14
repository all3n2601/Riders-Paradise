import React from "react";
import { Link } from "react-router-dom";
import imag from "../../assets/trans.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={imag} height={100} width={50} alt="logo" />
      <nav class="nav-items">
        <Link className="leftnav" to="/user/explore">
          Explore!
        </Link>
        <Link className="leftnav" to="/">
          Home
        </Link>
        <Link className="leftnav" to="/user/about">
          About
        </Link>
        <Link className="leftnav" to="/user/contact">
          Contact Us
        </Link>
        <Link className="sign" to="/login">
          Sign In
        </Link>
      </nav>
    </header>
  );
}

export default Header;
