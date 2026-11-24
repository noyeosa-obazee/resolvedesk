import User from "../model/User";

export const userSignupService = async (data) => {
  const result = await User.create(data);
  return result;
};
