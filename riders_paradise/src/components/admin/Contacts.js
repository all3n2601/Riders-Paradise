import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Orders.css";

const Contact = () => {
  const [bookedBikes, setBookedBikes] = useState([]);
  const [testBikes, setTestBikes] = useState([]);
  useEffect(() => {
    const fetchBookedBikes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/admin/getcontact`
        );
        setBookedBikes(response.data);
      } catch (error) {
        console.error("Error fetching booked bikes:", error);
      }
    };

    fetchBookedBikes();
  }, []);

  return (
    <div className="bookingdata">
      <div>
        <h2>Booked Bikes</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Bike Model</th>
              <th>Booking Date</th>
              <th>Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            {bookedBikes.map((bike) => (
              <tr key={bike._id}>
                <td>{bike.name}</td>
                <td>{bike.email}</td>
                <td>{bike.phnno}</td>
                <td>{bike.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
