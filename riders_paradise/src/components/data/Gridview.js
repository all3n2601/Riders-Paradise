import { React, useState, useEffect } from "react";
import "../../styles/GridView.css";
import axios from "axios";

function Gridview() {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/explore/bikes"); // Adjust the API endpoint
        setBikes(response.data);
        setFilteredBikes(response.data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (filter) => {
    // Apply the filter based on the selected category
    if (filter === "all") {
      setFilteredBikes(bikes);
    } else {
      const filtered = bikes.filter((bike) => bike.type === filter);
      setFilteredBikes(filtered);
    }

    // Set the active filter
    setActiveFilter(filter);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = bikes.filter(
      (bike) =>
        bike.brand.toLowerCase().includes(searchTerm) ||
        bike.model.toLowerCase().includes(searchTerm)
    );

    setFilteredBikes(filtered);
  };

  return (
    <div className="grid-container">
      <div className="filter-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-tabs">
          <button
            className={activeFilter === "all" ? "active" : ""}
            onClick={() => handleFilter("all")}
          >
            All Bikes
          </button>
          <button
            className={activeFilter === "Mountain" ? "active" : ""}
            onClick={() => handleFilter("Mountain")}
          >
            Mountain Bikes
          </button>
          <button
            className={activeFilter === "Road" ? "active" : ""}
            onClick={() => handleFilter("Road")}
          >
            Road Bikes
          </button>
        </div>
      </div>
      <div className="image-grid">
        {filteredBikes.map((bike) => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageURL} alt={bike.model} />
            <h3>
              {bike.brand} {bike.model}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gridview;
