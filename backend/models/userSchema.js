const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { isEmail } = require("validator");

const userSchema = new Schema({
  userName: { type: String, required: [true, "Enter UserName"] },
  mobileNumber: { type: String, default: "" },
  address: { type: String, default: "" },
  country: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  pincode: { type: String, default: "" },
  ownershipStatus: { type: String, default: "" },
  financeRequired: { type: String, default: "" },
  dateofBirth: { type: Date, default: "" },
  gender: { type: String, default: "" },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [6, "Minimum password length must be 6 characters"],
  },
  entryDate: { type: Date, default: Date.now, required: true },
  role: { type: String, default: "user" },
});

const Users = mongoose.model("Users", userSchema, "users");
module.exports = Users;
