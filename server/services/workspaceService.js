import Workspace from "../model/Workspace";

export const createWorkSpaceService = async (data) => {
  const result = await Workspace.create(data);
  return result;
};
