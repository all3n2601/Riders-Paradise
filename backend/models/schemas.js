const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: [true, "Enter Name"] },
  email: {
    type: String,
    unique: [true, "Already Exists"],
    required: [true, "Enter Email"],
  },
  pincode: { type: String, required: [true, "Enter Pincode"] },
  password: { type: String, required: [true, "Password is Required"] },
  entryDate: { type: Date, default: Date.now, required: true },
});

const Users = mongoose.model("Users", userSchema, "users");

const mySchemas = {
  Users: Users,
};

module.exports = mySchemas;
