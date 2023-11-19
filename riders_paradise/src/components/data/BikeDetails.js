import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/BikeDetails.css";
import { useParams } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
    <div className="bodyy">
      <section className="bikeimg">
        <div
          style={{
            position: "relative",
            top: "100px",
            left: "350px",
            width: "120vh",
            height: "80vh",
          }}
        >
          <img
            src={bike.imageURL}
            alt="bike"
            style={{ width: "900px", height: "600px" }}
          />
          {/* <div className="buttons">
            <button className="button">Test Ride</button>
            <button className="button">Pre-Book</button>
          </div> */}
        </div>

        <h2 className="bike-header">
          {bike.brand} {bike.model} ({bike.year})
        </h2>
      </section>

      <section className="bikeimages">
        <div className="bike-details">
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
      </section>
      <section className="bikeimages">
        <div className="bike-description">
          <h1>Bike Description</h1>
          <p className="desc">{bike.description}</p>
        </div>
      </section>

      <section className="bikeimages">
        {bike.images && bike.images.length > 0 && (
          <Carousel>
            {bike.images.map((images, index) => (
              <div key={index}>
                <img src={images} alt={`slide ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        )}
      </section>
    </div>
  );
}

export default BikeDetails;
