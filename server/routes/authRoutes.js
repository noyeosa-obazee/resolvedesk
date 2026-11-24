import { Router } from "express";
import {
  userSignupController,
  userLoginController,
} from "../controllers/authController.js";
import { validateUser } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/user", userSignupController);
router.post("/login", userLoginController);

export default router;
