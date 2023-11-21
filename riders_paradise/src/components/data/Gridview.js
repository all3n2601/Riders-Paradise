import { React, useState, useEffect } from "react";
import "../../styles/GridView.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../page/loader";

function Gridview() {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://riders-paradise.onrender.com/explore/bikes"
        );
        setBikes(response.data);
        setFilteredBikes(response.data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };

    fetchData();
  }, []);

  if (!bikes) {
    return <Loader />;
  }

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
            className={activeFilter === "Cruiser" ? "active" : ""}
            onClick={() => handleFilter("Cruiser")}
          >
            Cruiser
          </button>
          <button
            className={activeFilter === "Road" ? "active" : ""}
            onClick={() => handleFilter("Road")}
          >
            Road Bikes
          </button>
          <button
            className={activeFilter === "Other" ? "active" : ""}
            onClick={() => handleFilter("Other")}
          >
            Other
          </button>
        </div>
      </div>
      <div className="image-grid">
        {filteredBikes.map((bike) => (
          <Link key={bike._id} to={`/user/explore/bikes/${bike._id}`}>
            <div
              className="bike-card"
              style={{
                backgroundImage: `url(${bike.imageURL})`,
                backgroundSize: "cover",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="bike-info">
                {bike.brand} {bike.model}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gridview;
