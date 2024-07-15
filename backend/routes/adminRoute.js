const express = require("express");
const router = express.Router();

const {
  addBike,
  editBike,
  deleteBike,
  getTestRides,
  getBooked,
  getContact,
} = require("../controllers/adminController");

router.post("/addbike", addBike);
router.put("/editbike/:_id", editBike);
router.delete("/deletebike/:_id", deleteBike);
router.get("/gettestrides", getTestRides);
router.get("/admin/getbooked", getBooked);
router.get("/admin/getcontact", getContact);

module.exports = router;
