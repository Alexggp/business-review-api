import express from "express";

import { reviewController } from "../dependencies";

const reviewRouter = express.Router();

reviewRouter.post("/", reviewController.postNewReview.bind(reviewController));
reviewRouter.get(
  "/business/:businessId",
  reviewController.getReviewsOfABusiness.bind(reviewController)
);

export { reviewRouter };
