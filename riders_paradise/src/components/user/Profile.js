import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";
import { Link } from "react-router-dom";
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
  const [password, setPassword] = useState("");
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
    const userId = currentUser._id; // Replace with

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
      userName,
      mobileNumber,
      address,
      country,
      city,
      state,
      pincode,
      ownershipStatus,
      financeRequired,
      dateofBirth,
      gender,
      email,
    };

    axios
      .post("http://localhost:4000/user/updateprofile", {
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
    <div className="side-by-side">
      <h2 className="heading">User Profile</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-box">
          <label className="label" htmlFor="firstName">
            UserName
          </label>
          <input
            className="text-input"
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-box">
          <label className="date">Date of Birth</label>
          <input
            className="text-input"
            type="date"
            id="dateofBirth"
            value={dateofBirth}
            onChange={(e) => setdateofBirth(e.target.value)}
          />
          <label className="label" htmlFor="gender">
            Gender
          </label>
          <div className="gender-radio-group">
            <label>
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              Male
            </label>

            <label>
              <input
                className="radio-input"
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              Female
            </label>
          </div>
        </div>
        <div className="form-box">
          <label className="label" htmlFor="email">
            Email id
          </label>
          <input
            className="text-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-box">
          <label className="label" htmlFor="mobileNumber">
            Mobile
          </label>
          <input
            className="text-input"
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />

          <label className="label" htmlFor="address">
            Address
          </label>
          <input
            className="text-input"
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-box">
          <label className="label" htmlFor="country">
            State
          </label>
          <input
            className="text-input"
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <label className="label" htmlFor="state">
            Country
          </label>
          <input
            className="text-input"
            type="text"
            id="state"
            value={city}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-box">
          <label className="label" htmlFor="city">
            City
          </label>
          <input
            className="text-input"
            type="text"
            id="city"
            value={state}
            onChange={(e) => setCity(e.target.value)}
          />

          <label className="label" htmlFor="pincode">
            Pincode
          </label>
          <input
            className="text-input"
            type="text"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Update Profile
        </button>
        <p>
          To reach out to us:
          <Link to="/contact" className="link">
            Contact Us
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Profile;
