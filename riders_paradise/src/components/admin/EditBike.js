import React, { useState, useEffect } from "react";
import "../../styles/AddBike.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const EditBikeForm = () => {
  const [error, setError] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("Mountain");
  const [frameMaterial, setFrameMaterial] = useState("");
  const [frameSize, setFrameSize] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [frameType, setFrameType] = useState("");
  const [gearSystem, setGearSystem] = useState("");
  const [brakes, setBrakes] = useState("");
  const [suspension, setSuspension] = useState("");
  const [wheelSize, setWheelSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [allBikes, setAllBikes] = useState([]);
  const [selectedBikeId, setSelectedBikeId] = useState("");

  const resetForm = () => {
    setBrand("");
    setModel("");
    setYear("");
    setType("Mountain");
    setFrameMaterial("");
    setFrameSize("");
    setColor("");
    setPrice("");
    setImageURL("");
    setDescription("");
    setFrameType("");
    setGearSystem("");
    setBrakes("");
    setSuspension("");
    setWheelSize("");
    setQuantity("");
    setIsFeatured(false);
    setIsAvailable(true);
  };

  useEffect(() => {
    const fetchAllBikes = async () => {
      try {
        const response = await axios.get(
          "https://riders-paradise.onrender.com/explore/bikes"
        );
        setAllBikes(response.data);
      } catch (error) {
        console.error("Error fetching bikes:", error);
      }
    };

    fetchAllBikes();
  }, []);

  const handleModelChange = async (selectedModel) => {
    try {
      const response = await axios.get(
        `https://riders-paradise.onrender.com/api/bike/${selectedModel}`
      );
      const selectedBike = response.data;

      // Set state with selected bike details
      setSelectedBikeId(selectedBike._id);
      setBrand(selectedBike.brand);
      setModel(selectedBike.model);
      setYear(selectedBike.year);
      setType(selectedBike.type);
      setFrameMaterial(selectedBike.frameMaterial);
      setFrameSize(selectedBike.frameSize);
      setColor(selectedBike.color);
      setPrice(selectedBike.price);
      setImageURL(selectedBike.imageURL);
      setDescription(selectedBike.description);
      setFrameType(selectedBike.specifications.frameType);
      setGearSystem(selectedBike.specifications.gearSystem);
      setBrakes(selectedBike.specifications.brakes);
      setSuspension(selectedBike.specifications.suspension);
      setWheelSize(selectedBike.specifications.wheelSize);
      setQuantity(selectedBike.inventory.quantity);
      setIsFeatured(selectedBike.isFeatured);
      setIsAvailable(selectedBike.isAvailable);
    } catch (error) {
      console.error("Error fetching bike details:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bikeData = {
      brand,
      model,
      year,
      type,
      frameMaterial,
      frameSize,
      color,
      price,
      imageURL,
      description,
      specifications: {
        frameType,
        gearSystem,
        brakes,
        suspension,
        wheelSize,
      },
      inventory: {
        quantity,
        location: "",
      },
      isFeatured,
      isAvailable,
    };

    const showAlert = ({ result }) => {
      MySwal.fire({
        title: "Added Succesfully",
        text: { result },
        icon: "success",
        confirmButtonText: "OK",
      });
    };

    axios
      .put(
        `https://riders-paradise.onrender.com/admin/editbike/${selectedBikeId}`,
        bikeData
      )
      .then((result) => {
        console.log(result);

        if (result.data.status === "Success") {
          showAlert(result.data.message);
          resetForm();
        }
      })
      .catch((err) => setError(err));
  };

  return (
    <div className="parent-addbike">
      <div className="container-addbike">
        <div className="form-box-addbike">
          <h2>Edit Bike</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="column">
              <div className="input-group">
                <select
                  id="modelDropdown"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value);
                    handleModelChange(e.target.value);
                  }}
                >
                  <option value="" disabled>
                    Select Model
                  </option>
                  {allBikes.map((bike) => (
                    <option key={bike._id} value={bike.model}>
                      {bike.model}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
                />
                <label htmlFor="brand">Brand Name</label>
              </div>

              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
                />
                <label htmlFor="model">Model Name</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                />
                <label htmlFor="year">Year</label>
              </div>
              <div className="input-group">
                <select
                  name="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Mountain">Mountain</option>
                  <option value="Road">Road</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="BMX">BMX</option>
                  <option value="Cruiser">Cruiser</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="frameMaterial"
                  value={frameMaterial}
                  onChange={(e) => setFrameMaterial(e.target.value)}
                  required
                />
                <label htmlFor="frameMaterial">Frame Material</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="frameSize"
                  value={frameSize}
                  onChange={(e) => setFrameSize(e.target.value)}
                  required
                />
                <label htmlFor="frameSize">Frame Size</label>
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="imageURL"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  required
                />
                <label htmlFor="imageURL">Image URL</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="textarea"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <label htmlFor="description">Description</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="specifications.frameType"
                  value={frameType}
                  onChange={(e) => setFrameType(e.target.value)}
                  required
                />
                <label htmlFor="specifications.frameType">Frame Type</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="specifications.gearSystem"
                  value={gearSystem}
                  onChange={(e) => setGearSystem(e.target.value)}
                  required
                />
                <label htmlFor="specifications.gearSystem">Gear System</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="specifications.brakes"
                  value={brakes}
                  onChange={(e) => setBrakes(e.target.value)}
                  required
                />
                <label htmlFor="specifications.brakes">Brakes</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="specifications.suspension"
                  value={suspension}
                  onChange={(e) => setSuspension(e.target.value)}
                  required
                />
                <label htmlFor="specifications.suspension">Suspension</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="specifications.wheelSize"
                  value={wheelSize}
                  onChange={(e) => setWheelSize(e.target.value)}
                  required
                />
                <label htmlFor="specifications.wheelSize">Wheel Size</label>
              </div>
            </div>
            <div className="column">
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <label htmlFor="price">Price</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="inventory.quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
                <label htmlFor="inventory.quantity">Quantity</label>
              </div>
              <div className="input-box">
                <span className="icon"></span>
                <input
                  type="text"
                  name="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="isFeatured"
                    id="isFeatured"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                  />
                  <label htmlFor="isFeatured">Featured</label>
                </div>
              </div>
              <div className="form-group" style={{ marginBottom: "20px" }}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="isAvailable"
                    id="isAvailable"
                    checked={isAvailable}
                    onChange={(e) => setIsAvailable(e.target.checked)}
                  />
                  <label htmlFor="isAvailable">Available</label>
                </div>
              </div>
              <button type="submit" className="bttn">
                Add Bike to Inventory
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBikeForm;
