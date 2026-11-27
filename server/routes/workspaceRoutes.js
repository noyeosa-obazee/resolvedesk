import { Router } from "express";
import { validateUser } from "../middleware/authMiddleware.js";
import { checkUserWorkspaceRole } from "../middleware/checkPermissionsMiddleware.js";
import {
  createWorkspaceController,
  addToWorkspaceController,
  editWorksapceController,
} from "../controllers/workspaceController.js";

const router = Router();

router.use(validateUser);

router.post("/new", createWorkspaceController);
router.post("/add", addToWorkspaceController);
router.put(
  "/edit/:workspaceId",
  checkUserWorkspaceRole,
  editWorksapceController,
);

export default router;
