const express = require("express");
const { registerUser } = require("../controllers/userControllers");

const router = express.Router();

//Creating route
router.route("/").post(registerUser)

module.exports = router;