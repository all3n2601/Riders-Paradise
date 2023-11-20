import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";

const Profile = () => {
  return (
    <div className="container-p">
      <div className="h1-p">
        <h1>User Profile</h1>
      </div>  
      <form action="#">
        <div className="form-p">
          <div className="details personal-p">
            <div className="fields-p">
              <div className="input-field-p">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-field-p">
                <label>Date of birth</label>
                <input type="date" placeholder="Enter your DOB" />
              </div>
              <div className="input-field-p">
                <label>Email</label>
                <input type="email" placeholder="Enter your Emailid" />
              </div>
              <div className="input-field-p">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter mobile Number" />
              </div>
              <div className="input-field-p">
                <label>Country</label>
                <input type="email" placeholder="Enter your Country" />
              </div>
              <div className="input-field-p">
                <label>State</label>
                <input type="email" placeholder="Enter your State" />
              </div>
              <div className="input-field-p">
                <label>Address</label>
                <input type="text" placeholder="Enter your address" />
              </div>
              <div className="input-field-p">
                <label>City</label>
                <input type="text" placeholder="Enter your city" />
              </div>
              <div className="input-field-p">
                <label>Pincode</label>
                <input type="text" placeholder="Enter your Pincode" />
              </div>
            </div>
          </div>
        </div>
        <div className="button-p">
          <button type='submit'>submit</button>
          <p>To know about our privacy policy:</p>
          <button type='submit'>Privacy </button>
          <p>To reach out to us</p>
          <button type='submit'>contact us</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

