import { Review } from "../../domain/review";
import { ReviewRepository } from "../../domain/review-repository";
import { REVIEWS } from "./reviews";

export class InMemoryReviewRepository implements ReviewRepository {
  async getByBussinesId(businessId: string): Promise<Review[]> {
    const reviews = REVIEWS.filter((r) => r.business_id === businessId);
    return reviews;
  }
}
