import express from "express";
import {
  registerController,
  loginController,
} from "../controller/auth-controller.js";
const authRoutes = new express.Router();
authRoutes.post("/auth/register", registerController);
authRoutes.post("/auth/login", loginController);

export default authRoutes;
