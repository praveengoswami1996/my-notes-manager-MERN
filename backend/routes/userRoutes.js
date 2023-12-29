const express = require("express");
const { registerUser, loginUser } = require("../controllers/userControllers");

const router = express.Router();

//Creating route
router.route("/registration").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;