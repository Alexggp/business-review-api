import { v4 as uuidv4 } from "uuid";

import { Review } from "../../domain/review";
import { ReviewRepository } from "../../domain/review-repository";
import { postReviewDto } from "../validation/post-review-dto";
import { REVIEWS } from "./reviews";

export class InMemoryReviewRepository implements ReviewRepository {
  async createNewReview(newReviewData: postReviewDto): Promise<Review> {
    const newReview = new Review(
      uuidv4(),
      newReviewData.business_id,
      newReviewData.user_name,
      newReviewData.text,
      newReviewData.rating
    );
    REVIEWS.push(newReview);
    return newReview;
  }
  async getByBussinesId(businessId: string): Promise<Review[]> {
    const reviews = REVIEWS.filter((r) => r.business_id === businessId);
    return reviews;
  }
}
