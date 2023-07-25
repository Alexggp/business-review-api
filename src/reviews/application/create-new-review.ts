import { NewReview, Review } from "../domain/review";
import { ReviewRepository } from "../domain/review-repository";

export class CreateNewReview {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async createNewReview(NewReviewData: NewReview): Promise<Review> {
    const reviews = await this.reviewRepository.createNewReview(NewReviewData);
    return reviews;
  }
}
