import { BusinessRepository } from "../../businesses/domain/business-repository";
import { Review } from "../domain/review";
import { ReviewRepository } from "../domain/review-repository";
import { postReviewDto } from "../infrastructure/validation/post-review-dto";

export class CreateNewReview {
  constructor(
    private readonly reviewRepository: ReviewRepository,
    private readonly businessRpository: BusinessRepository
  ) {}

  async createNewReview(NewReviewData: postReviewDto): Promise<Review | null> {
    const businessUpdated = await this.businessRpository.updateReview(
      NewReviewData.business_id
    );
    if (!businessUpdated) {
      return null;
    }
    const reviews = await this.reviewRepository.createNewReview(NewReviewData);
    return reviews;
  }
}
