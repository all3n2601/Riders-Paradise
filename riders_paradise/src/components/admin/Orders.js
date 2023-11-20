import React, { useState } from "react";

const Orders = () => {
  const [bookedBikes, setBookedBikes] = useState([]);
  useEffect(() => {
    const fetchBookedBikes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/admin/getbooked`
        );
        setBookedBikes(response.data);
      } catch (error) {
        console.error("Error fetching booked bikes:", error);
      }
    };

    fetchBookedBikes();
  }, []);
  return (
    <div>
      <ul>
        {bookedBikes.map((bike) => (
          <li key={bike._id}>
            {bike.model} - {bike.bookingDate}
          </li>
        ))}
      </ul>
    </div>
  );
};
