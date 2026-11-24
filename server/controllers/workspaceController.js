import { createWorkSpaceService } from "../services/workspaceService";

export const createWorkSpaceController = async (req, res) => {
  const user = req.user;

  if (!req.body.name || !req.body.slug) {
    res.status(412).json({ message: "Please fill all required fields" });
  }

  try {
    const createdWorkspace = await createWorkSpaceController({
      ...req.body,
      createdBy: user._id,
    });
    res
      .status(201)
      .json({
        message: "Workspace created successfully",
        data: createdWorkspace,
      });
  } catch (err) {
    console.error(err);
    res.json(500).json({
      message: "An error occured while creating a workspace. Please try again.",
    });
  }
};
