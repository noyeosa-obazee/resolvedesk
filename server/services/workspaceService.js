import Workspace from "../model/Workspace";
import Membership from "../model/Membership";

export const createWorkspaceService = async (data) => {
  const result = await Workspace.create(data);
  return result;
};

export const addToWorkspaceService = async (workspaceId, userId, role) => {
  const result = await Membership.create({
    workspaceId,
    userId,
    role,
    status: "active",
  });
  return result;
};
