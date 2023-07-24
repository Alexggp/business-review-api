import express from "express";

import { businessController } from "../dependencies";

const businessRouter = express.Router();

businessRouter.get(
  "/:id",
  businessController.getBussinesInformation.bind(businessController)
);

export { businessRouter };
