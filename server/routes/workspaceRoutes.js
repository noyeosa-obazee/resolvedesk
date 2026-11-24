import { Router } from "express";
import { validateUser } from "../middleware/authMiddleware";
import { createWorkSpaceController } from "../controllers/workspaceController";

const router = Router();

router.use(validateUser);

router.post("/", createWorkSpaceController);

export default router;
