import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/BikeDetails.css";
import { useParams } from "react-router-dom";

function BikeDetails() {
  const id = useParams()._id;
  const [bike, setBike] = useState(null);

  useEffect(() => {
    const fetchBikeDetails = async () => {
      try {
        console.log(id);
        const response = await axios.get(
          `http://localhost:4000/explore/bikes/${id}`
        );
        setBike(response.data);
      } catch (error) {
        console.error("Error fetching bike details:", error);
      }
    };

    fetchBikeDetails();
  }, [id]);

  if (!bike) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <div className="body">
      <div className="bike-info">
        <div
          style={{
            backgroundImage: `url(${bike.imageURL})`,
            backgroundSize: "cover",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p className="bike-description">{bike.description}</p>
          <div className="buttons">
            <button className="button">Book a Test Ride</button>
            <button className="button">Buy It</button>
          </div>
        </div>
      </div>
      <div className="bike-details">
        <h2>
          {bike.brand} {bike.model} ({bike.year})
        </h2>
        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <td>{bike.type}</td>
            </tr>
            <tr>
              <th>Frame Material</th>
              <td>{bike.frameMaterial}</td>
            </tr>
            <tr>
              <th>Frame Size</th>
              <td>{bike.frameSize}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{bike.color}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>${bike.price}</td>
            </tr>
            <tr>
              <th>Frame Type</th>
              <td>{bike.specifications.frameType}</td>
            </tr>
            <tr>
              <th>Gear System</th>
              <td>{bike.specifications.gearSystem}</td>
            </tr>
            <tr>
              <th>Brakes</th>
              <td>{bike.specifications.brakes}</td>
            </tr>
            <tr>
              <th>Suspension</th>
              <td>{bike.specifications.suspension}</td>
            </tr>
            <tr>
              <th>Wheel Size</th>
              <td>{bike.specifications.wheelSize}</td>
            </tr>
            <tr>
              <th>Quantity Available</th>
              <td>{bike.inventory.quantity}</td>
            </tr>
            <tr>
              <th>Location</th>
              <td>{bike.inventory.location}</td>
            </tr>
            <tr>
              <th>Featured</th>
              <td>{bike.isFeatured ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>Available</th>
              <td>{bike.isAvailable ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BikeDetails;
