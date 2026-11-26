import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ticket = new Schema(
  {
    workspaceId: Schema.Types.ObjectId,
    customerId: Schema.Types.ObjectId,
    subject: String,
    status: String,
  },
  {
    timestamps: true,
  },
);

const Ticket = model("Ticket", ticket);

export default Ticket;
