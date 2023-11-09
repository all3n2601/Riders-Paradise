const express = require("express");
const router = express.Router();
const mySchemas = require("../models/schemas");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await mySchemas.Users.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is Incorrect");
      }
    } else {
      res.json("There is No Record Please Sign Up to Proceed");
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const newUser = await mySchemas.Users.create(req.body);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/admin/addbike", async (req, res) => {
  try {
    const newBike = await mySchemas.Bike.create(req.body);
    res.status(201).json({ message: "Bike added successfully", bike: newBike });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/explore/bikes", async (req, res) => {
  try {
    const bikes = await mySchemas.Bike.find();
    res.json(bikes);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
