import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/review-repository";

export class ReviewsOfABusiness {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async getByBussinesId(businessId: string): Promise<Review[]> {
    const reviews = await this.reviewRepository.getByBussinesId(businessId);
    return reviews;
  }
}
