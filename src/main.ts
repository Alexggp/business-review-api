import "./shared/infrastructure/load-env-vars";

import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

import { businessRouter } from "./businesses/infrastructure/rest-api/business-router";
import { reviewRouter } from "./reviews/infrastructure/rest-api/review-router";
import { config } from "./shared/infrastructure/config";

function boostrap() {
  const app = express();
  app.use(morgan("dev"));

  app.use(bodyParser.json());
  app.use("/businesses", businessRouter);
  app.use("/reviews", reviewRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
