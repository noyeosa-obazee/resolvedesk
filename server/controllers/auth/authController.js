import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "../../loadEnvironment.js";
import { userSignupService } from "../../services/auth/authService.js";
import db from "../../config/dbConn.js";

export const userSignupController = async (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.confirmPassword
  ) {
    res.status(412).json({ message: "Please fill all required fields" });
  }

  if (req.body.password !== req.body.confirmPassword) {
    res
      .status(412)
      .json({ message: "Password and confirmed password do not match" });
  }

  try {
    const userCollection = db.collection("user");
    const existingUser = await userCollection.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      res
        .status(409)
        .json({ message: "A user with this email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const createdUser = await userSignupService({
      ...req.body,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully", createdUser });
  } catch (err) {
    console.error(err);
    res.json(500).json({
      message: "An error occured while creating an account. Please try again.",
    });
  }
};

export const userLoginController = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(412).json({ message: "Please fill all required fields" });
  }

  try {
    const userCollection = db.collection("user");
    const existingUser = await userCollection.findOne({
      email: req.body.email,
    });

    if (!existingUser) {
      res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(
      req.body.password,
      existingUser.password,
    );

    if (!isMatch) {
      res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { email: existingUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" },
    );

    res.status(200).json({ message: "Log in successful", token });
  } catch (err) {
    console.error(err);
    res.json(500).json({
      message: "An error occured while trying to log in. Please try again.",
    });
  }
};
