import express from "express";
import authController from "../controller/auth-controller.js";
const authRoutes = new express.Router();
authRoutes.post("/auth/register", authController.register);
authRoutes.post("/auth/login", authController.login);

export default authRoutes;
