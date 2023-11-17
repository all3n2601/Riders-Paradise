const express = require("express");
const router = express.Router();
const mySchemas = require("../models/schemas");
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* Login and Register */

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await mySchemas.Users.findOne({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = jwt.sign({ id: user._id }, config.get("jwtsecret"), {
          expiresIn: 3600,
        });
        res.json({ status: "Success", role: user.role, token });
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

router.post("/register", async (req, res) => {
  const { name, email, pincode, password } = req.body;
  try {
    const existingUser = await mySchemas.Users.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new mySchemas.Users({
      name,
      email,
      pincode,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* Admin Functions */

router.post("/admin/addbike", async (req, res) => {
  try {
    const newBike = await mySchemas.Bike.create(req.body);
    res.status(201).json({ message: "Bike added successfully", bike: newBike });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/admin/deletebike/:id", async (req, res) => {
  const bikeId = req.params.id;

  try {
    const deletedBike = await mySchemas.Bike.findByIdAndDelete(bikeId);

    if (deletedBike) {
      res
        .status(200)
        .json({ message: "Bike deleted successfully", bike: deletedBike });
    } else {
      res.status(404).json({ error: "Bike not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* Data Fetch Functions */

router.get("/explore/bikes", async (req, res) => {
  try {
    const bikes = await mySchemas.Bike.find();
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/explore/bikes/:_id", async (req, res) => {
  try {
    const bikeId = req.params._id;
    const bike = await mySchemas.Bike.findById(bikeId);

    if (!bike) {
      return res.status(404).json({ message: "Bike not found" });
    }
    res.status(200).json(bike);
  } catch (error) {
    console.error("Error fetching bike details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/user/bookbike", async (req, res) => {
  try {
    const bookNow = await mySchemas.BookNow.create(req.body);
    res.json(bookNow);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/* User Functions */

router.post("/user/testride", async (req, res) => {
  try {
    const testRide = await mySchemas.TestRide.create(req.body);
    res.json(testRide);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
