import jwt from "jsonwebtoken";
import User from "../model/User";
import { MongoError } from "mongodb";

export const validateUser = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({ email: decoded.email });
    req.user = user;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError)
      res.status(401).json({ message: "Invalid or expired token" });
  }

  if (err instanceof MongoError) {
    res.status(500).json({ message: "An error occured. Please try again" });
  }

  res.status(500).json({ message: "Internal server error" });
};
