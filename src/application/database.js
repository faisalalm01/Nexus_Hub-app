import mongoose from "mongoose";
import { logger } from "./logger.js";
import "dotenv/config";

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    logger.info("Success Connect Database");
  } catch (error) {
    logger.error(`Error: ${error.message}`);
  }
};

// Event listener untuk log
mongoose.connection.on("connected", () => {
  logger.info("Mongoose connected on " + process.env.DATABASE_URL);
});

mongoose.connection.on("error", (err) => {
  logger.error("Mongoose connection error: " + err.message);
});

mongoose.connection.on("disconnected", () => {
  logger.warn("Mongoose disconnected");
});

mongoose.connection.on("reconnected", () => {
  logger.info("Mongoose reconnected");
});

mongoose.connection.on("reconnectFailed", () => {
  logger.error("Mongoose reconnectedFailed");
});

export const testConnectionDatabase = connectToDatabase;
