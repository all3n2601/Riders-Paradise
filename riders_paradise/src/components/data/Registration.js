import React, { useState } from 'react';
import '../../styles/Registration.css';

const Registration = () => {
  return (
    <div className="container-r">
      <h1>Bike Registration</h1>
      <form action="#">
        <div className="form-r">
          <div className="details personal-r">
            <div className="fields-r">
              <div className="input-field-r">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-field-r">
                <label>Date of birth</label>
                <input type="date" placeholder="Enter your DOB" />
              </div>
              <div className="input-field-r">
                <label>Email</label>
                <input type="email" placeholder="Enter your Emailid" />
              </div>
              <div className="input-field-r">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter mobile Number" />
              </div>
              <div className="input-field-r">
                <label>City</label>
                <input type="text" placeholder="Enter your city" />
              </div>
              <div className="input-field-r">
                <label>Ownership type</label>
                <input type="text" placeholder="Ownership status" />
              </div>  
              <div className="input-field-r">
                <label>Finance</label>
                <input type="text" placeholder="Enter if finance req" />
              </div>
              <div className="input-field-r">
                <label>Payment</label>
                <input type="text" placeholder="Enter payment method" />
              </div>
            </div>
          </div>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default Registration;
