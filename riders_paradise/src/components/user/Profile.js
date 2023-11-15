import React from "react";
import "../../styles/Profile.css";
function Center({children}) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        {children}
      </div>
    );
  }

function Profile() {
    return (
        <Center>
    
        <div className="upc">
            <div className="gradient"></div>
            <div className="profile-down">
                <div className="profile-title">User Details</div>
                <div className="profile-description">
                <p>Name: Userxyz</p>
                <p>Emaild: user@gmail.com</p>
                <p>location: chennai</p>
                <p>pincode: 600005</p>

                </div>
                <div className="profile-button"><a href="support@ridersparadise.com">Contact Us</a></div>
                <div className="profile-button"><a href="purchase history">Purchases</a></div>
                <div className="profile-button"><a href="Privacy Policy">Privacy Policy</a></div>
                <div className="profile-button"><a href="Transaction History">Transactions </a></div>
            </div>

        </div>
        </Center>
    )

export default Profile;
