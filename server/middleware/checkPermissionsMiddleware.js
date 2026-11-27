import Workspace from "../model/Workspace";
import Membership from "../model/Membership";

export const checkIsWorkspaceAdmin = async (req, res, next) => {
  const user = req.user;

  try {
    const workspace = await Workspace.findById(req.params.workspaceId);

    if (!workspace) {
      return res.status(404).json({ message: "Workspace does not exist" });
    }

    const workspaceAdmin = await Membership.findOne({
      userId: user._id,
      workspaceId: workspace._id,
      role: "admin",
    });
    if (!workspaceAdmin) {
      return res.status(401).json({
        message: "Unauthorized. Only workspace admins can edit this workspace",
      });
    }
    req.body.workspace = workspace;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Database operation failed" });
  }
};
