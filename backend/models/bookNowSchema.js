const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookNowSchema = new Schema({
  model: { type: String, required: [true, "Select Model"] },
  state: { type: String, required: [true, "Select State"] },
  address: { type: String, required: [true, "Enter Address"] },
  country: { type: String, required: [true, "Select Country"] },
  city: { type: String, required: [true, "Select City"] },
  pincode: { type: String, required: [true, "Select PinCode"] },
  dealer: { type: String, required: [true, "Select Dealer"] },
  name: { type: String, required: [true, "Enter Your Name"] },
  email: { type: String, required: [true, "Enter Your Email"] },
  phno: { type: String, required: [true, "Enter Your Mobile"] },
  paymentMethod: {
    type: String,
    required: [true, "Enter Your Payment Method"],
  },
  ownershipStatus: {
    type: String,
    required: [true, "Enter Your Ownership Status"],
  },
  financeRequired: {
    type: String,
    required: [true, "Enter If Finance Required"],
  },

  submissionDate: { type: Date, default: Date.now, required: true },
});

const BookNow = mongoose.model("BookNow", bookNowSchema, "booked");
module.exports = BookNow;
