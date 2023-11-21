import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Orders.css";

const Orders = () => {
  const [bookedBikes, setBookedBikes] = useState([]);
  const [testBikes, setTestBikes] = useState([]);
  useEffect(() => {
    const fetchBookedBikes = async () => {
      try {
        const response = await axios.get(
          `https://riders-paradise.onrender.com/admin/getbooked`
        );
        setBookedBikes(response.data);
      } catch (error) {
        console.error("Error fetching booked bikes:", error);
      }
    };

    fetchBookedBikes();
  }, []);

  useEffect(() => {
    const fetchTestBikes = async () => {
      try {
        const response = await axios.get(
          `https://riders-paradise.onrender.com/admin/gettestrides`
        );
        setTestBikes(response.data);
      } catch (error) {
        console.error("Error fetching booked bikes:", error);
      }
    };

    fetchTestBikes();
  }, []);

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const cellStyle = {
    color: "white",
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const headingCellStyle = {
    ...cellStyle,
    backgroundColor: "#f2f2f2",
    color: "black",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-around",
    margin: "20px",
  };

  const sectionStyle = {
    width: "48%", // Adjust the width of each section as needed
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h2 style={{ color: "white" }}>Booked Bikes</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headingCellStyle}>Name</th>
              <th style={headingCellStyle}>Bike Model</th>
              <th style={headingCellStyle}>Booking Date</th>
              <th style={headingCellStyle}>Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            {bookedBikes.map((bike) => (
              <tr key={bike._id}>
                <td style={cellStyle}>{bike.name}</td>
                <td style={cellStyle}>{bike.model}</td>
                <td style={cellStyle}>{bike.submissionDate}</td>
                <td style={cellStyle}>{bike.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={sectionStyle}>
        <h2 style={{ color: "white" }}>Test Bikes</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headingCellStyle}>Name</th>
              <th style={headingCellStyle}>Bike Model</th>
              <th style={headingCellStyle}>Booking Date</th>
              <th style={headingCellStyle}>Email ID</th>
            </tr>
          </thead>
          <tbody>
            {testBikes.map((bike) => (
              <tr key={bike._id}>
                <td style={cellStyle}>{bike.name}</td>
                <td style={cellStyle}>{bike.model}</td>
                <td style={cellStyle}>{bike.submissionDate}</td>
                <td style={cellStyle}>{bike.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
