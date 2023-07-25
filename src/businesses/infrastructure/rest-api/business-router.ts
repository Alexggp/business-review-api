import express from "express";

import { validationMiddleware } from "../../../shared/infrastructure/validation/validation-middleware";
import { businessController } from "../dependencies";
import { getBusinessDto } from "../validation/get-business-dto";

const businessRouter = express.Router();

businessRouter.get(
  "/:id",
  validationMiddleware(getBusinessDto),
  businessController.getBussinesInformation.bind(businessController)
);

export { businessRouter };
