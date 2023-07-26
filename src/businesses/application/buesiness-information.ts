import { ReviewRepository } from "../../reviews/domain/review-repository";
import { Logger } from "../../shared/domain/logger";
import { Business } from "../domain/business";
import { BusinessRepository } from "../domain/business-repository";

export class BusinessInformation {
  constructor(
    private readonly businessRepository: BusinessRepository,
    private readonly reviewRepository: ReviewRepository,
    private readonly logger: Logger
  ) {}

  async getBussinesById(businessId: string): Promise<Business | null> {
    const business = await this.businessRepository.getById(businessId);

    if (!business) {
      // trying the built-in logger a little bit
      const error = new Error(`business not found: ${businessId}`);
      this.logger.error(`[ERROR] ${error.message}`);
    } else {
      this.logger.info(
        "[BusinessInformation] - Business information successfuly fetched"
      );
      // Fetching the reviews of this bisness and calculating the average rating
      const reviews = await this.reviewRepository.getByBussinesId(businessId);
      if (reviews.length) {
        const mean = (
          reviews.reduce((total, review) => total + review.rating, 0) /
          reviews.length
        ).toFixed(1);
        business.averageRating = mean;
      }
    }

    return business;
  }
}
