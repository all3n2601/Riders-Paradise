const express = require("express");
const router = express.Router();
const mySchemas = require("../models/schemas");

router.get("/users", (req, res) => {});

router.post("/register", (req, res) => {
  mySchemas.Users.create(req.body)
    .then((sers) => res.json(users))
    .catch((err) => res.json(err));
});

module.exports = router;
