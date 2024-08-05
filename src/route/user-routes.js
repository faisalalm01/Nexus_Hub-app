import express from "express";
import { AuthMiddleware } from "../middleware/auth-middleware.js";
import { getDetailUserController } from "../controller/user-controller.js";
const userRoutes = new express.Router();
userRoutes.use(AuthMiddleware);
userRoutes.get("/users/get", getDetailUserController);

export default userRoutes;
