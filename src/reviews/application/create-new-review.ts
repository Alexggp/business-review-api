import { Review } from "../domain/review";
import { reviewDto } from "../domain/review-dto";
import { ReviewRepository } from "../domain/review-repository";

export class CreateNewReview {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async createNewReview(NewReviewData: reviewDto): Promise<Review> {
    const reviews = await this.reviewRepository.createNewReview(NewReviewData);
    return reviews;
  }
}
