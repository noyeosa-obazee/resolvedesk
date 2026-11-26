import {
  createWorkspaceService,
  addToWorkspaceService,
} from "../services/workspaceService.js";
import Membership from "../model/Membership.js";

export const createWorkspaceController = async (req, res) => {
  const user = req.user;

  if (!req.body.name || !req.body.slug) {
    return res.status(412).json({ message: "Please fill all required fields" });
  }

  try {
    const createdWorkspace = await createWorkspaceService({
      ...req.body,
      createdBy: user._id,
    });
    return res.status(201).json({
      message: "Workspace created successfully",
      data: createdWorkspace,
    });
  } catch (err) {
    console.error(err);
    return res.json(500).json({
      message: "An error occured while creating a workspace. Please try again.",
    });
  }
};

export const addToWorkspaceController = async (req, res) => {
  const user = req.user;
  try {
    const existingMembership = await Membership.findOne({ userId: user._id });
    if (existingMembership) {
      return res
        .status(409)
        .json({ message: "User is already a member of this workspace" });
    }

    const newMembership = await addToWorkspaceService(
      req.body.workspaceId,
      user._id,
      req.body.role,
    );
    return res.status(200).json({
      message: "User added to workspace successfully",
      data: newMembership,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
