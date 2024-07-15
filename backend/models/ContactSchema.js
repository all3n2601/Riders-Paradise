const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String, required: [true, "Enter Your Name"] },
  email: { type: String, required: [true, "Enter Your Email"] },
  phnno: { type: String, required: [true, "Enter Your Number"] },
  comment: { type: String, required: [true, "Enter Your Comment"] },
});

const ContactNow = mongoose.model("ContactNow", ContactSchema, "contact");

module.exports = ContactNow;
