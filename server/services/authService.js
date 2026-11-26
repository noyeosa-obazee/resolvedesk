import User from "../model/User.js";

export const userSignupService = async (data) => {
  const result = await User.create(data);
  return result;
};
