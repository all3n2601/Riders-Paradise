const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const TestRide = require("../models/testRideSchema");
const BookNow = require("../models/bookNowSchema");
const Contact = require("../models/ContactSchema");
const asyncHandler = require("express-async-handler");

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = jwt.sign({ id: user._id }, config.get("jwtsecret"), {
          expiresIn: 3600,
        });
        res.json({ status: "Success", role: user.role, token, user: user });
      } else {
        res.json({ error: "Password is Incorrect" });
      }
    } else {
      res.json({ error: "There is No Record. Please Sign Up to Proceed" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const userRegister = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const userUpdate = asyncHandler(async (req, res) => {
  const { userId, updatedProfile } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedProfile },
      { new: true, runValidators: true }
    );

    res.status(200).json({ status: "Success", user: updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error.message);

    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return res
        .status(400)
        .json({ status: "Error", errors: validationErrors });
    }

    res.status(500).json({ status: "Error", message: "Internal Server Error" });
  }
});

const bookBike = asyncHandler(async (req, res) => {
  try {
    const bookNow = await BookNow.create(req.body);
    res.json({
      status: "Success",
      bookNow,
      message: "Booked successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const testRide = asyncHandler(async (req, res) => {
  try {
    const testRide = await TestRide.create(req.body);
    res.json({ status: "Success", testRide });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const contact = asyncHandler(async (req, res) => {
  try {
    const contactnow = await Contact.create(req.body);
    res.json({
      status: "Success",
      contactnow,
      message: "Request added successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  userLogin,
  userRegister,
  userUpdate,
  bookBike,
  testRide,
  contact,
};
