import express from "express";

import { validationMiddleware } from "../../../shared/infrastructure/validation/validation-middleware";
import { reviewController } from "../dependencies";
import { getReviewDto } from "../validation/get-review-dto";
import { postReviewDto } from "../validation/post-review-dto";

const reviewRouter = express.Router();

reviewRouter.post(
  "/",
  validationMiddleware(postReviewDto),
  reviewController.postNewReview.bind(reviewController)
);

reviewRouter.get(
  "/business/:businessId",
  validationMiddleware(getReviewDto),
  reviewController.getReviewsOfABusiness.bind(reviewController)
);

export { reviewRouter };
