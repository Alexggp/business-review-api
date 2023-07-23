import express from "express";

import { businessController } from "../dependencies";

const businessRouter = express.Router();

businessRouter.post(
  "/:id",
  businessController.sendBussinesInformation.bind(businessController)
);

export { businessRouter };
