import mongoose from "mongoose";

import { config } from "../config";
import { logger } from "../dependencies";
export const mongooseLoader = async () => {
  try {
    const mongoConnection = await mongoose.connect(config.mongodb.url);
    logger.info("MongoDB has been connected");
    return mongoConnection.connection.db;
  } catch (err) {
    if (err instanceof Error) logger.error(err.message);
    process.exit(1);
  }
};
