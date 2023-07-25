import express from "express";

import { validationMiddleware } from "../../../shared/infrastructure/validation/validation-middleware";
import { reviewDto } from "../../domain/review-dto";
import { reviewController } from "../dependencies";

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
