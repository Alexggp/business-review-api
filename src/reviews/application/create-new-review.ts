import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/review-repository";
import { reviewDto } from "../infrastructure/validation/review-dto";

export class CreateNewReview {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async createNewReview(NewReviewData: reviewDto): Promise<Review> {
    const reviews = await this.reviewRepository.createNewReview(NewReviewData);
    return reviews;
  }
}
