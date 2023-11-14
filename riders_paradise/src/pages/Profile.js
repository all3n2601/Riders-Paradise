import React from "react";
import "../assets/styles/Profile.css";
import img from "../assets/profile.jpg";

function BikeDetails() {
  return (
    <div className="body">
      <div class="user-info">
        <img class="user-image" src={img} alt="Awesome Bike" />
        <p class="user-infromation">
          user name
        </p>
        
      </div>
      <div class="bike-details">
        <table>
          <tr>
            <th>email</th>
            <td>user@gmail.com</td>
          </tr>
          <tr>
            <th>phone number</th>
            <td>9876543210</td>
          </tr>
          <tr>
            <th>location</th>
            <td>chennai</td>
          </tr>
          <tr>
            <th>pincode</th>
            <td>600005</td>
          </tr>
         
        </table>
      </div>
    </div>
  );
}
export default BikeDetails;
