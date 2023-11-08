import React from "react";
import "../assets/styles/BikeDetails.css";
import img from "../assets/bike.jpg";

function BikeDetails() {
  return (
    <div className="body">
      <div class="bike-info">
        <img class="bike-image" src={img} alt="Awesome Bike" />
        <p class="bike-description">
          Discover the thrill of riding our awesome bike. Whether you're a
          seasoned rider or a beginner, this bike will take your cycling
          experience to the next level.
        </p>
        <div class="buttons">
          <button class="button">Book a Test Ride</button>
          <button class="button">Buy It</button>
        </div>
      </div>
      <div class="bike-details">
        <table>
          <tr>
            <th>CC</th>
            <td>250cc</td>
          </tr>
          <tr>
            <th>Mileage</th>
            <td>50 mpg</td>
          </tr>
          <tr>
            <th>Colors</th>
            <td>Red, Blue, Black</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>$5,999</td>
          </tr>
          <tr>
            <th>Warranty</th>
            <td>2 years</td>
          </tr>
          <tr>
            <th>Tire Size</th>
            <td>120/70 R17</td>
          </tr>
          <tr>
            <th>Detail 1</th>
            <td>Value 1</td>
          </tr>
          <tr>
            <th>Detail 2</th>
            <td>Value 2</td>
          </tr>
          <tr>
            <th>Detail 3</th>
            <td>Value 3</td>
          </tr>
          <tr>
            <th>Detail 4</th>
            <td>Value 4</td>
          </tr>
          <tr>
            <th>Detail 5</th>
            <td>Value 5</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default BikeDetails;
