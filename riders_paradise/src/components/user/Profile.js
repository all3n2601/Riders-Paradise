import React, { useState } from 'react';
import '../../styles/Profile.css';


const Profile = () => {
  return (
    <div className="container">
      <h1>User Profile</h1>
      <form action="#">
        <div className="form">
          <div className="details personal">
            <div className="fields">
              <div className="input-field">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-field">
                <label>Date of birth</label>
                <input type="date" placeholder="Enter your DOB" />
              </div>
              <div className="input-field">
                <label>Email</label>
                <input type="email" placeholder="Enter your Emailid" />
              </div>
              <div className="input-field">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter mobile Number" />
              </div>
              <div className="input-field">
                <label>City</label>
                <input type="text" placeholder="Enter your city" />
              </div>
              <div className="input-field">
                <label>Pincode</label>
                <input type="text" placeholder="Enter your Pincode" />
              </div>
            </div>
          </div>
        </div>
        <button type='submit'>submit</button>
        <p>To know about our privacy policy:</p>
        <button type='submit'>Privacy </button>
        <p>To reach out to us</p>
        <button type='submit'>contact us</button>
      </form>
    </div>
  );
};


export default Profile;

