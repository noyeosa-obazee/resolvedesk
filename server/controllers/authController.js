import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "../loadEnvironment.js";
import { userSignupService } from "../services/authService.js";
import User from "../model/User.js";
import generateOTP from "../utils/generateOtp.js";
import { sendOTP } from "../services/emailService.js";

export const userSignupController = async (req, res) => {
  if (
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password
  ) {
    res.status(412).json({ message: "Please fill all required fields" });
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
    const otp = generateOTP();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await userSignupService({
      ...req.body,
      password: hashedPassword,
      otp,
      otpExpire: new Date(Date.now() + 10 * 60 * 1000),
    });
    await sendOTP(req.body.email, otp);
    res.status(201).json({
      message: "Registration successful. Please verify your email using OTP.",
    });
  } catch (err) {
    console.error(err);
    res.json(500).json({
      message: "Registration failed",
    });
  }
};

export const validateOTP = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (req.body.otp !== user.otp) {
      res.status(412).json({ message: "Invalid OTP" });
    }
    if (user.otpExpire < new Date()) {
      res.status(412).json({ message: "OTP expired" });
    }
    res.status(200).json({ message: "OTP validated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "OTP validation failed" });
  }
};

export const userLoginController = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(412).json({ message: "Please fill all required fields" });
  }

  try {
    const existingUser = await User.findOne({
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
