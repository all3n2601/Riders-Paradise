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
          `https://riders-paradise.onrender.com/admin/getcontact`
        );
        setBookedBikes(response.data);
      } catch (error) {
        console.error("Error fetching booked bikes:", error);
      }
    };

    fetchBookedBikes();
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
    width: "80%",
  };

  return (
    <div className="bookingdata">
      <div style={sectionStyle}>
        <h2 style={{ color: "white" }}>User Requests</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={headingCellStyle}>Name</th>
              <th style={headingCellStyle}>Email Id</th>
              <th style={headingCellStyle}>Phone Number</th>
              <th style={headingCellStyle}>Comment</th>
            </tr>
          </thead>
          <tbody>
            {bookedBikes.map((bike) => (
              <tr key={bike._id}>
                <td style={cellStyle}>{bike.name}</td>
                <td style={cellStyle}>{bike.email}</td>
                <td style={cellStyle}>{bike.phnno}</td>
                <td style={cellStyle}>{bike.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contact;
