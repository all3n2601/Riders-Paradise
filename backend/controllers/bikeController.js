const Bike = require("../models/bikeSchema");
const asyncHandler = require("express-async-handler");

const getBikes = asyncHandler(async (req, res) => {
  try {
    const bikes = await Bike.find();
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const getBike = asyncHandler(async (req, res) => {
  try {
    const bikeId = req.params._id;
    const bike = await Bike.findById(bikeId);

    if (!bike) {
      return res.status(404).json({ message: "Bike not found" });
    }
    res.status(200).json(bike);
  } catch (error) {
    console.error("Error fetching bike details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const getBikeModel = asyncHandler(async (req, res) => {
  const model = req.params.model;

  try {
    const bike = await Bike.findOne({ model });

    if (bike) {
      res.status(200).json(bike);
    } else {
      res.status(404).json({ error: "Bike not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { getBikes, getBike, getBikeModel };
