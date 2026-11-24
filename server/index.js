import express from "express";
import "./loadEnvironment.js";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import workspaceRoutes from "./routes/workspaceRoutes.js";

mongoose.connect(process.env.ATLAS_URI);

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/workspace", workspaceRoutes);

app.listen(PORT, () => console.log("Server listening on port: " + PORT));
