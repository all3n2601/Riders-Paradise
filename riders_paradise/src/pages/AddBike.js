import React, { useState } from "react";
import "../assets/styles/AddBike.css";
import axios from "axios";

const AddBikeForm = () => {
  const [error, setError] = useState("");
  const [bike, setBike] = useState({
    brand: "",
    model: "",
    year: "",
    type: "Mountain",
    frameMaterial: "",
    frameSize: "",
    color: "",
    price: "",
    imageURL: "",
    description: "",
    specifications: {
      frameType: "",
      gearSystem: "",
      brakes: "",
      suspension: "",
      wheelSize: "",
    },
    ratings: {
      averageRating: 0,
      totalRatings: 0,
      reviews: [],
    },
    inventory: {
      quantity: 0,
      location: "",
    },
    isFeatured: false,
    isAvailable: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBike({
      ...bike,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/admin/addbike", bike)
      .then((result) => {
        console.log(result);

        if (result.data === "Success") {
          setError("Added Succesfully!");
        }
      })
      .catch((err) => setError("Passwords Dont Match!"));
  };

  return (
    <div className="parent">
      <div className="container">
        <div className="form-box">
          <h2>Add Bike</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit} onChange={handleInputChange}>
            <div className="column">
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="brand" required />
                <label htmlFor="brand">Brand Name</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="model" required />
                <label htmlFor="model">Model Name</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="year" required />
                <label htmlFor="year">Year</label>
              </div>
              <div className="input-group">
                <select name="type">
                  <option>Mountain</option>
                  <option>Road</option>
                  <option>Hybrid</option>
                  <option>BMX</option>
                  <option>Cruiser</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="frameMaterial" required />
                <label htmlFor="frameMaterial">Frame Material</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="frameSize" required />
                <label htmlFor="frameSize">Frame Size</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="color" required />
                <label htmlFor="color">Color</label>
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="price" required />
                <label htmlFor="price">Price</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="imageURL" required />
                <label htmlFor="imageURL">Image URL</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="description" required />
                <label htmlFor="description">Description</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="specifications.frameType" />
                <label htmlFor="specifications.frameType">Frame Type</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="specifications.gearSystem" />
                <label htmlFor="specifications.gearSystem">Gear System</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="specifications.brakes" />
                <label htmlFor="specifications.brakes">Brakes</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="specifications.suspension" />
                <label htmlFor="specifications.suspension">Suspension</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="specifications.wheelSize" />
                <label htmlFor="specifications.wheelSize">Wheel Size</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" name="inventory.quantity" />
                <label htmlFor="inventory.quantity">Quantity</label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input type="checkbox" name="isFeatured" id="isFeatured" />
                <label htmlFor="isFeatured">Featured</label>
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input type="checkbox" name="isAvailable" id="isAvailable" />
                <label htmlFor="isAvailable">Available</label>
              </div>
            </div>
            <button type="submit" className="btn">
              Add Bike to Inventory
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBikeForm;
