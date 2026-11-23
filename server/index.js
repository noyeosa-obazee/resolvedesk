import express from "express";
import "./loadEnvironment.js";
import authRoutes from "./routes/auth/authRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log("Server listening on port: " + PORT));
