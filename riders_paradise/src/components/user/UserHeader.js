import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch} from 'react-redux';
import { logoutState } from "../../redux/userSlice";

const UserHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutState());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between align-items-end   ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/user/home">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/user/explore">
              Explore
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/user/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/user/contact">
              Contact
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/user/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-primary" onClick={handleLogOut}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserHeader;
