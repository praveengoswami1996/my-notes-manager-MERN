import express from "express";
import { registerUser, loginUser } from "../controllers/userControllers";

const router = express.Router();

//Creating route
router.route("/registration").post(registerUser);
router.route("/login").post(loginUser);

export default router;