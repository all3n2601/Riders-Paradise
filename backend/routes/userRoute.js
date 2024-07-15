const express = require("express");
const router = express.Router();

const {
  userLogin,
  userRegister,
  userUpdate,
  bookBike,
  testRide,
  contact,
} = require("../controllers/userController");

router.post("/login", userLogin);
router.post("/register", userRegister);
router.put("/updateprofile", userUpdate);
router.post("/bookbike", bookBike);
router.post("/testride", testRide);
router.post("/contact", contact);

module.exports = router;
