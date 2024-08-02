import { logger } from "./application/logger.js";
import { server } from "./application/server.js";
import "dotenv/config";
import { testConnectionDatabase } from "./application/database.js";
testConnectionDatabase();
server.listen(process.env.PORT, () => {
  logger.info(`Server Running on port ${process.env.PORT}`);
});
