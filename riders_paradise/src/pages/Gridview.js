import React from "react";
import img from "../assets/bike.jpg";
import "../assets/styles/GridView.css";
import { Link } from "react-router-dom";

function Gridview() {
  return (
    <div className="image-grid">
      <div className="image-container">
        <Link to="/user/explore/bike">
          <img className="image" src={img} alt="" />
          <div className="message-box">
            <h1>bike name</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Gridview;
