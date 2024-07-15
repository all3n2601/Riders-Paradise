const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Mountain", "Road", "Hybrid", "BMX", "Cruiser", "Other"],
    required: true,
  },
  frameMaterial: {
    type: String,
    required: true,
  },
  frameSize: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  specifications: {
    frameType: String,
    gearSystem: String,
    brakes: String,
    suspension: String,
    wheelSize: String,
  },
  ratings: {
    averageRating: String,
    totalRatings: String,
    reviews: [
      {
        user: {
          type: String,
          required: true,
        },
        rating: String,
        comment: String,
      },
    ],
  },
  inventory: {
    quantity: String,
    location: String,
  },
  isFeatured: {
    type: String,
    default: false,
  },
  isAvailable: {
    type: String,
    default: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

const Bike = mongoose.model("Bike", BikeSchema, "bikes");
module.exports = Bike;
