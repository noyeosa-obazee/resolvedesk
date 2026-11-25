import { Router } from "express";
import { validateUser } from "../middleware/authMiddleware";
import {
  createWorkspaceController,
  addWorkspaceController,
} from "../controllers/workspaceController";

const router = Router();

router.use(validateUser);

router.post("/new", createWorkspaceController);
router.post("/add", addWorkspaceController);

export default router;
