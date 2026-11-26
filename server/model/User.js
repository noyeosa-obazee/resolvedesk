import mongoose from "mongoose";
const { Schema, model } = mongoose;

const user = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    isEmailVerified: Boolean,
    otp: String,
    otpExpire: Date,
  },
  {
    timestamps: true,
  },
);

const User = model("User", user);

export default User;
