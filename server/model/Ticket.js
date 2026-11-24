import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ticket = new Schema(
  {
    workspaceId: ObjectId,
    customerId: ObjectId,
    subject: String,
    status: String,
  },
  {
    timestamps: true,
  },
);

const Ticket = model("Ticket", ticket);

export default Ticket;
