import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/review-repository";
import { postReviewDto } from "../infrastructure/validation/post-review-dto";

export class CreateNewReview {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async createNewReview(NewReviewData: postReviewDto): Promise<Review> {
    const reviews = await this.reviewRepository.createNewReview(NewReviewData);
    return reviews;
  }
}
