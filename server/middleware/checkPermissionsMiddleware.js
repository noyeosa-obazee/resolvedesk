import Workspace from "../model/Workspace";
import Membership from "../model/Membership";

export const checkUserWorkspaceRole = async (req, res, next) => {
  const user = req.user;
  let workspace;

  try {
    if (req.params.workspaceId) {
      workspace = await Workspace.findById(req.params.workspaceId);
    } else if (req.body.workspaceId) {
      workspace = await Workspace.findById(req.body.workspaceId);
    } else if (req.query.workspaceId) {
      workspace = await Workspace.findById(req.query.workspaceId);
    } else {
      return res.status(400).json({ message: "Please provide workspace id" });
    }

    if (!workspace) {
      return res.status(404).json({ message: "Workspace does not exist" });
    }

    const workspaceMembership = await Membership.findOne({
      userId: user._id,
      workspaceId: workspace._id,
    });
    if (!workspaceMembership) {
      return res.status(401).json({
        message: "Unauthorized. You are not a member of this workspace",
      });
    }
    req.body.userWorkspaceRole = workspaceMembership.role;
    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Database operation failed" });
  }
};
