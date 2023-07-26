import express from "express";

import { validationMiddleware } from "../../../shared/infrastructure/validation/validation-middleware";
import { reviewController } from "../dependencies";
import { getReviewBusinessDto } from "../validation/get-review-business-dto";
import { postReviewDto } from "../validation/post-review-dto";

const reviewRouter = express.Router();

reviewRouter.post(
  "/",
  validationMiddleware(postReviewDto),
  reviewController.postNewReview.bind(reviewController)
);

reviewRouter.get(
  "/business/:businessId",
  validationMiddleware(getReviewBusinessDto),
  reviewController.getReviewsOfABusiness.bind(reviewController)
);

export { reviewRouter };
