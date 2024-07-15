const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
module.exports = TestRide;
