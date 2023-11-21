import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";
import classNames from "classnames";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { currentUser } from "../auth/auth";

const Profile = () => {
  const [userName, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [ownershipStatus, setOwnershipStatus] = useState("");
  const [financeRequired, setFinanceRequired] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const showAlert = ({ result }) => {
    MySwal.fire({
      title: "Profile Updated Succesfully",
      text: { result },
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const userData = currentUser; // Assuming the data contains user profile info
    setName(userData.name);
    setMobileNumber(userData.mobileNumber);
    setAddress(userData.address);
    setCountry(userData.country);
    setCity(userData.city);
    setState(userData.state);
    setPincode(userData.pincode);
    setOwnershipStatus(userData.ownershipStatus);
    setFinanceRequired(userData.financeRequired);
    setdateofBirth(userData.dateOfBirth);
    setGender(userData.gender);
    setEmail(userData.email);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = currentUser._id; // Replace with the actual user ID
    const updatedProfile = {
      userName: userName,
      mobileNumber: mobileNumber,
      address: address,
      country: country,
      city: city,
      state: state,
      pincode: pincode,
      ownershipStatus: ownershipStatus,
      financeRequired: financeRequired,
      dateofBirth: dateofBirth,
      email: email,
    };

    axios
      .put("https://riders-paradise.onrender.com/user/updateprofile", {
        userId,
        updatedProfile,
      })
      .then((result) => {
        console.log(result);

        if (result.data.status === "Success") {
          showAlert({ result });
        }
      })
      .catch((err) => setError(err));
  };
  return (
    <div className="whole-profile">
      <div className="container-p">
        <div className="h1-p">
          <h1 className="heading1-profile">User Profile</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-p">
            <div className="details personal-p">
              <div className="fields-p">
                <div className="input-field-p">
                  <label>Full Name</label>
                  <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="input-field-p">
                  <label>Date of birth</label>
                  <input
                    type="date"
                    id="dateofBirth"
                    value={dateofBirth}
                    onChange={(e) => setdateofBirth(e.target.value)}
                    placeholder="Enter your DOB"
                  />
                </div>
                <div className="input-field-p">
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Emailid"
                  />
                </div>
                <div className="input-field-p">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter mobile Number"
                  />
                </div>
                <div className="input-field-p">
                  <label>Country</label>
                  <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter your Country"
                  />
                </div>
                <div className="input-field-p">
                  <label>State</label>
                  <input
                    type="text"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Enter your State"
                  />
                </div>
                <div className="input-field-p">
                  <label>Address</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                  />
                </div>
                <div className="input-field-p">
                  <label>City</label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city"
                  />
                </div>
                <div className="input-field-p">
                  <label>Pincode</label>
                  <input
                    type="text"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter your Pincode"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="button-submit">
            <button
              className={classNames("btn-profile", "submit")}
              type="submit"
            >
              Update Profile
            </button>
          </div>

          <div className="button-p">
            <p className="para">To know about our privacy policy:</p>
            <button
              className={classNames("btn-profile", "privacy")}
              type="button"
            >
              Privacy
            </button>
          </div>

          <div className="button-p">
            <p className="para">To reach out to us</p>
            <button
              className={classNames("btn-profile", "contact")}
              type="button"
            >
              contact us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
