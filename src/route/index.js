import express from "express";
import authRoutes from "./auth-routes.js";
import userRoutes from "./user-routes.js";
const router = new express.Router();
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Server its Works  🚀 ",
    status_code: 200,
  });
});
router.get("/api/v1", (req, res) => {
  res.status(200).json({
    message: "Api NextHub its Works, Welcome 🖐 ",
    api_version: "1.0.0",
    status_code: 200,
  });
});
router.use("/api/v1", authRoutes);
router.use("/api/v1", userRoutes);

export default router;
