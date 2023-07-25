import express from "express";

import { validationMiddleware } from "../../../shared/infrastructure/validation/validation-middleware";
import { reviewController } from "../dependencies";
import { reviewDto } from "../validation/review-dto";

const reviewRouter = express.Router();

reviewRouter.post(
  "/",
  validationMiddleware(reviewDto),
  reviewController.postNewReview.bind(reviewController)
);

reviewRouter.get(
  "/business/:businessId",
  reviewController.getReviewsOfABusiness.bind(reviewController)
);

export { reviewRouter };
