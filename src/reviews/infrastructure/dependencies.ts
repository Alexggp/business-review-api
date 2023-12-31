import { CreateNewReview } from "../application/create-new-review";
import { ReviewsOfABusiness } from "../application/reviews-of-a-business";
import { ReviewController } from "./rest-api/review-controller";
import { MongoReviewResository } from "./review-repository/mongo-review-repository";

const reviewRepository = new MongoReviewResository();
const reviewsOfABusiness = new ReviewsOfABusiness(reviewRepository);
const createNewReview = new CreateNewReview(reviewRepository);

export const reviewController = new ReviewController(
  reviewsOfABusiness,
  createNewReview
);
