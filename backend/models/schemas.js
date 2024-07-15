// const mongoose = require("mongoose");
// const { isEmail } = require("validator");

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   userName: { type: String, required: [true, "Enter UserName"] },
//   mobileNumber: { type: String, default: "" },
//   address: { type: String, default: "" },
//   country: { type: String, default: "" },
//   city: { type: String, default: "" },
//   state: { type: String, default: "" },
//   pincode: { type: String, default: "" },
//   ownershipStatus: { type: String, default: "" },
//   financeRequired: { type: String, default: "" },
//   dateofBirth: { type: Date, default: "" },
//   gender: { type: String, default: "" },
//   email: {
//     type: String,
//     required: [true, "Please enter an email"],
//     unique: true,
//     lowercase: true,
//     validate: [isEmail, "Please enter a valid email"],
//   },
//   password: {
//     type: String,
//     required: [true, "Please enter a valid password"],
//     minlength: [6, "Minimum password length must be 6 characters"],
//   },
//   entryDate: { type: Date, default: Date.now, required: true },
//   role: { type: String, default: "user" },
// });

// const Users = mongoose.model("Users", userSchema, "users");

// const BikeSchema = new Schema({
//   brand: {
//     type: String,
//     required: true,
//   },
//   model: {
//     type: String,
//     required: true,
//   },
//   year: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     enum: ["Mountain", "Road", "Hybrid", "BMX", "Cruiser", "Other"],
//     required: true,
//   },
//   frameMaterial: {
//     type: String,
//     required: true,
//   },
//   frameSize: {
//     type: String,
//     required: true,
//   },
//   color: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: String,
//     required: true,
//   },
//   imageURL: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   specifications: {
//     frameType: String,
//     gearSystem: String,
//     brakes: String,
//     suspension: String,
//     wheelSize: String,
//   },
//   ratings: {
//     averageRating: String,
//     totalRatings: String,
//     reviews: [
//       {
//         user: {
//           type: String,
//           required: true,
//         },
//         rating: String,
//         comment: String,
//       },
//     ],
//   },
//   inventory: {
//     quantity: String,
//     location: String,
//   },
//   isFeatured: {
//     type: String,
//     default: false,
//   },
//   isAvailable: {
//     type: String,
//     default: true,
//   },
//   dateAdded: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Bike = mongoose.model("Bike", BikeSchema, "bikes");

// const testRideSchema = new Schema({
//   model: { type: String, required: [true, "Select Model"] },
//   state: { type: String, required: [true, "Select State"] },
//   city: { type: String, required: [true, "Select City"] },
//   dealer: { type: String, required: [true, "Select Dealer"] },
//   name: { type: String, required: [true, "Enter Your Name"] },
//   email: { type: String, required: [true, "Enter Your Email"] },
//   phno: { type: String, required: [true, "Enter Your Mobile"] },
//   remarks: { type: String },
//   agreeTerms: {
//     type: Boolean,
//     required: [true, "You must agree to the terms and conditions"],
//   },
//   submissionDate: { type: Date, default: Date.now, required: true },
// });

// const TestRide = mongoose.model("TestRide", testRideSchema, "testRides");

// const bookNowSchema = new Schema({
//   model: { type: String, required: [true, "Select Model"] },
//   state: { type: String, required: [true, "Select State"] },
//   address: { type: String, required: [true, "Enter Address"] },
//   country: { type: String, required: [true, "Select Country"] },
//   city: { type: String, required: [true, "Select City"] },
//   pincode: { type: String, required: [true, "Select PinCode"] },
//   dealer: { type: String, required: [true, "Select Dealer"] },
//   name: { type: String, required: [true, "Enter Your Name"] },
//   email: { type: String, required: [true, "Enter Your Email"] },
//   phno: { type: String, required: [true, "Enter Your Mobile"] },
//   paymentMethod: {
//     type: String,
//     required: [true, "Enter Your Payment Method"],
//   },
//   ownershipStatus: {
//     type: String,
//     required: [true, "Enter Your Ownership Status"],
//   },
//   financeRequired: {
//     type: String,
//     required: [true, "Enter If Finance Required"],
//   },

//   submissionDate: { type: Date, default: Date.now, required: true },
// });

// const BookNow = mongoose.model("BookNow", bookNowSchema, "booked");

// const ContactSchema = new Schema({
//   name: { type: String, required: [true, "Enter Your Name"] },
//   email: { type: String, required: [true, "Enter Your Email"] },
//   phnno: { type: String, required: [true, "Enter Your Number"] },
//   comment: { type: String, required: [true, "Enter Your Comment"] },
// });

// const ContactNow = mongoose.model("ContactNow", ContactSchema, "contact");

// const mySchemas = {
//   Users: Users,
//   Bike: Bike,
//   TestRide: TestRide,
//   BookNow: BookNow,
//   ContactNow: ContactNow,
// };

// module.exports = mySchemas;
