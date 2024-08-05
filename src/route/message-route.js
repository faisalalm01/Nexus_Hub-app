import express from "express";
import { AuthMiddleware } from "../middleware/auth-middleware.js";
import { sendMessageController } from "../controller/message-controller.js";
const messageRoutes = new express.Router();
messageRoutes.use(AuthMiddleware);
messageRoutes.post("/message/send", sendMessageController);

export default messageRoutes;
