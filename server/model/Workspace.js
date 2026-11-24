import mongoose from "mongoose";
const { Schema, model } = mongoose;

const workspace = new Schema(
  {
    name: String,
    slug: String,
    description: String,
    createdBy: ObjectId,
  },
  {
    timestamps: true,
  },
);

const Workspace = model("Workspace", workspace);

export default Workspace;
