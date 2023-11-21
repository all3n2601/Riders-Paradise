import React, { useState, useEffect } from "react";
import "../../styles/Registration.css";
import classNames from "classnames";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Registration = () => {
  const [selectedModel, setSelectedModel] = useState("");
  const [userName, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [ownershipStatus, setOwnershipStatus] = useState("");
  const [financeRequired, setFinanceRequired] = useState("");
  const [dateofBirth, setdateofBirth] = useState("");
  const [email, setEmail] = useState("");
  const [bikes, setBikes] = useState([]);
  const [dealer, setDealer] = useState("");

  const dealers = [
    "Riders Paradise ",
    "Riders Bikes",
    "Paradise Hub",
    "Speedy Bikes",
    "Golden Wheels",
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
  ];

  const paymentMethods = ["UPI", "Card", "EMI"];

  const showAlert = ({ result }) => {
    MySwal.fire({
      title: "Added Succesfully",
      text: { result },
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://riders-paradise.onrender.com/explore/bikes"
        );
        setBikes(response.data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      model: selectedModel,
      state: state,
      address: address,
      country: country,
      city: city,
      pincode: pincode,
      dealer: dealer,
      name: userName,
      email: email,
      phno: mobileNumber,
      paymentMethod: paymentMethod,
      ownershipStatus: ownershipStatus,
      financeRequired: financeRequired,
    };
    console.log(formData);
    axios
      .post("https://riders-paradise.onrender.com/user/bookbike", formData)
      .then((result) => {
        if (result.data.status === "Success") {
          showAlert(result.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-r">
      <h1 style={{ position: "relative", left: "500px" }}>Bike Registration</h1>
      <div className="sec-container-r">
        <form onSubmit={handleSubmit}>
          <div className="form-r">
            <div className="details personal-r">
              <div className="fields-r">
                <div className="input-field-r">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="input-field-r">
                  <label>Date of birth</label>
                  <input
                    type="date"
                    value={dateofBirth}
                    onChange={(e) => setdateofBirth(e.target.value)}
                    placeholder="Enter your DOB"
                  />
                </div>
                <div className="input-field-r">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Emailid"
                  />
                </div>
                <div className="input-field-r">
                  <label>Selected Model</label>
                  <select
                    className="model"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                  >
                    <option value="">Select Model</option>
                    {bikes.map((bikes) => (
                      <option key={bikes.id} value={bikes.id}>
                        {bikes.model}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-field-r">
                  <label>Selected Dealer</label>
                  <select
                    className="dealer"
                    value={dealer}
                    onChange={(e) => setDealer(e.target.value)}
                  >
                    <option value="">Select Dealer</option>
                    {dealers.map((dealer, index) => (
                      <option key={index} value={dealer}>
                        {dealer}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-field-r">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter mobile Number"
                  />
                </div>
                <div className="input-field-r">
                  <label>Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter mobile Number"
                  />
                </div>
                <div className="input-field-r">
                  <label>Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="Enter mobile Number"
                  />
                </div>
                <div className="input-field-r">
                  <label>State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Enter mobile Number"
                  />
                </div>
                <div className="input-field-r">
                  <label>PinCode</label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                  />
                </div>
                <div className="input-field-r">
                  <label>City</label>
                  <select
                    className="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-field-r">
                  <label>Ownership type</label>
                  <input
                    type="text"
                    value={ownershipStatus}
                    onChange={(e) => setOwnershipStatus(e.target.value)}
                    placeholder="Ownership status"
                  />
                </div>
                <div className="input-field-r">
                  <label>Finance</label>
                  <input
                    type="text"
                    value={financeRequired}
                    onChange={(e) => setFinanceRequired(e.target.value)}
                    placeholder="Enter if finance req"
                  />
                </div>
                <div className="input-field-r">
                  <label>Payment</label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    placeholder="Enter payment method"
                  >
                    <option>Enter Payment Mode</option>
                    {paymentMethods.map((paymentMethod, index) => (
                      <option key={index} value={paymentMethod}>
                        {paymentMethod}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="button-submit">
            <button
              className={classNames("btn-profile", "submit")}
              type="submit"
            >
              Register Bike
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
