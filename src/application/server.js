import express from "express";
import cors from "cors";
import http from "http";
import router from "../route/index.js";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { notFoundMiddleware } from "../middleware/not-found-middleware.js";
import morgan from "morgan";
import { initializeSocket } from "./socket.js";

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router);
app.use(errorMiddleware);
app.use(notFoundMiddleware);

initializeSocket(server);

export { server };
