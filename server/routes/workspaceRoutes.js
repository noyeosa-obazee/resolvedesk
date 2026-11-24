import { Router } from "express";
import { validateUser } from "../middleware/authMiddleware";
import { createWorkspaceController } from "../controllers/workspaceController";

const router = Router();

router.use(validateUser);

router.post("/", createWorkspaceController);

export default router;
