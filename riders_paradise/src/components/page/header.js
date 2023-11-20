import React from "react";
import { Link } from "react-router-dom";
import imag from "../../assets/trans.png";

function Header() {
  const headerStyle = {
    top: 0,
    left: 0,
    width: "100%",
    height: "10vh",
    backgroundColor: "#212121",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    zIndex: 1000,
  };

  const logoStyle = {
    display: "block",
    marginRight: "20px", // Adjust the margin as needed
  };

  const navItemsStyle = {
    display: "flex",
    alignItems: "center",
  };

  const leftNavStyle = {
    color: "white",
    textDecoration: "none",
    marginRight: "20px", // Adjust the margin as needed
  };

  const signInStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "auto", // Push the "Sign In" link to the right
  };

  return (
    <header style={headerStyle}>
      <img style={logoStyle} src={imag} height={100} width={100} alt="logo" />
      <nav style={navItemsStyle}>
        <Link style={leftNavStyle} to="/explore">
          Explore!
        </Link>
        <Link style={leftNavStyle} to="/">
          Home
        </Link>
        <Link style={leftNavStyle} to="/about">
          About
        </Link>
        <Link style={leftNavStyle} to="/contact">
          Contact Us
        </Link>
        <Link style={signInStyle} to="/login">
          Sign In
        </Link>
      </nav>
    </header>
  );
}

export default Header;
