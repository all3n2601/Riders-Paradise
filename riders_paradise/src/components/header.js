import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Riders Paradise
      </Link>
      <nav class="nav-items">
        <Link className="leftnav" to="/">
          Explore!
        </Link>
        <Link className="leftnav" to="/">
          Home
        </Link>
        <Link className="leftnav" to="/about">
          About
        </Link>
        <Link className="leftnav" to="/contact">
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
