import Workspace from "../model/Workspace";

export const createWorkspaceService = async (data) => {
  const result = await Workspace.create(data);
  return result;
};
