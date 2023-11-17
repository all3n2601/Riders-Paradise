const mongoose = require("mongoose");
const { isEmail } = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, "Enter Name"] },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  pincode: { type: String, required: [true, "Enter Pincode"] },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [6, "Minimum password length must be 6 characters"],
  },
  entryDate: { type: Date, default: Date.now, required: true },
  role: { type: String, default: "user" },
});

const Users = mongoose.model("Users", userSchema, "users");

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

const testRideSchema = new Schema({
  model: { type: String, required: [true, "Select Model"] },
  state: { type: String, required: [true, "Select State"] },
  city: { type: String, required: [true, "Select City"] },
  dealer: { type: String, required: [true, "Select Dealer"] },
  name: { type: String, required: [true, "Enter Your Name"] },
  email: { type: String, required: [true, "Enter Your Email"] },
  phno: { type: String, required: [true, "Enter Your Mobile"] },
  remarks: { type: String },
  agreeTerms: {
    type: Boolean,
    required: [true, "You must agree to the terms and conditions"],
  },
  submissionDate: { type: Date, default: Date.now, required: true },
});

const TestRide = mongoose.model("TestRide", testRideSchema, "testRides");

const bookNowSchema = new Schema({
  model: { type: String, required: [true, "Select Model"] },
  state: { type: String, required: [true, "Select State"] },
  city: { type: String, required: [true, "Select City"] },
  dealer: { type: String, required: [true, "Select Dealer"] },
  name: { type: String, required: [true, "Enter Your Name"] },
  email: { type: String, required: [true, "Enter Your Email"] },
  phno: { type: String, required: [true, "Enter Your Mobile"] },
  remarks: { type: String },
  agreeTerms: {
    type: Boolean,
    required: [true, "You must agree to the terms and conditions"],
  },
  submissionDate: { type: Date, default: Date.now, required: true },
});

const BookNow = mongoose.model("BookNow", bookNowSchema, "booked");

const mySchemas = {
  Users: Users,
  Bike: Bike,
  TestRide: TestRide,
  BookNow: BookNow,
};

module.exports = mySchemas;
