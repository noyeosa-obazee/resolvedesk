import { Router } from "express";
import { userSignupController } from "../../controllers/auth/authController.js";

const router = Router();

router.post("/user", userSignupController);

export default router;
