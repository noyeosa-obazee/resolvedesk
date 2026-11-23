import db from "../../config/dbConn.js";

export const userSignupService = async (newUser) => {
  const userCollection = db.collection("user");
  const result = await userCollection.insertOne(newUser);
  return result;
};
