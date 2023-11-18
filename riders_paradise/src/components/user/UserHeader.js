import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { setCurrentUser, setUserRole } from "../auth/auth";

const UserHeader = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    setCurrentUser(null);
    setUserRole(null);
    navigate("/");
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/user/home">
              Home
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/user/explore">
              Explore
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/user/about">
              About
            </Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/user/contact">
              Contact
            </Link>
          </li>

          <li class="nav-item">
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserHeader;
