import express from "express";
import { AuthMiddleware } from "../middleware/auth-middleware.js";
import userController from "../controller/user-controller.js";
const userRouter = new express.Router();
userRouter.use(AuthMiddleware);
userRouter.get("/users/get", userController.getUser);

export default userRouter;
