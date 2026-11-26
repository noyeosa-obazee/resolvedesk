import { Router } from "express";
import { validateUser } from "../middleware/authMiddleware.js";
import {
  createWorkspaceController,
  addToWorkspaceController,
} from "../controllers/workspaceController.js";

const router = Router();

router.use(validateUser);

router.post("/new", createWorkspaceController);
router.post("/add", addToWorkspaceController);

export default router;
