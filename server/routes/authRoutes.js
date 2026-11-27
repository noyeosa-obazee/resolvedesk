import { Router } from "express";
import {
  userSignupController,
  userLoginController,
  validateOTP,
} from "../controllers/authController.js";

const router = Router();

router.post("/signup", userSignupController);
router.post("/login", userLoginController);
router.post("/verify-otp", validateOTP);

export default router;
