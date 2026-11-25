import mongoose from "mongoose";
const { Schema, model } = mongoose;

const user = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    otp: String,
    otpExpire: Date,
  },
  {
    timestamps: true,
  },
);

const User = model("User", user);

export default User;
