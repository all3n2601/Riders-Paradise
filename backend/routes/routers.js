const express = require("express");
const router = express.Router();
const mySchemas = require("../models/schemas");

router.get("/users", (req, res) => {});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  mySchemas.Users.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is Incorrect");
      }
    } else {
      res.json("There is No Record Please Sign Up to Proceed");
    }
  });
});

router.post("/register", (req, res) => {
  mySchemas.Users.create(req.body)
    .then((sers) => res.json(users))
    .catch((err) => res.json(err));
});

module.exports = router;
