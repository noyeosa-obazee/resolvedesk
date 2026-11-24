import { Router } from "express";
import {
  userSignupController,
  userLoginController,
} from "../../controllers/auth/authController.js";
import { validateUser } from "../../middleware/auth/authMiddleware.js";

const router = Router();

router.post("/user", userSignupController);
router.post("/login", userLoginController);

export default router;
