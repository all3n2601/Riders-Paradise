const express = require("express");
const router = express.Router();

const {
  getBikes,
  getBike,
  getBikeModel,
} = require("../controllers/bikeController");

router.get("/bikes", getBikes);
router.get("/bikes/:_id", getBike);
router.get("/bike/:model", getBikeModel);

module.exports = router;
