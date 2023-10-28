const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pincode: { type: Number, required: true },
  entryDate: { type: Date, default: Date.now, required: true },
});

const Users = mongoose.model("Users", userSchema, "users");

const mySchemas = {
  Users: Users,
};

module.exports = mySchemas;
