import "./shared/infrastructure/load-env-vars";

import bodyParser from "body-parser";
import express from "express";

import { businessRouter } from "./businesses/infrastructure/rest-api/business-router";
import { config } from "./shared/infrastructure/config";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/businesses", businessRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

boostrap();
