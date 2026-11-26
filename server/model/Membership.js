import mongoose from "mongoose";
const { Schema, model } = mongoose;

const membership = new Schema(
  {
    workspaceId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    role: String,
    status: String,
  },
  {
    timestamps: true,
  },
);

const Membership = model("Membership", membership);

export default Membership;
