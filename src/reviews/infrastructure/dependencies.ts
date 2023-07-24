import { ReviewsOfABusiness } from "../application/reviews-of-a-business";
import { ReviewController } from "./rest-api/review-controller";
import { InMemoryReviewRepository } from "./review-repository/in-memory-review-repository";

const reviewRepository = new InMemoryReviewRepository();
const reviewsOfABusiness = new ReviewsOfABusiness(reviewRepository);

export const reviewController = new ReviewController(reviewsOfABusiness);
