import { Logger } from "../../shared/domain/logger";
import { Business } from "../domain/business";
import { BusinessRepository } from "../domain/business-repository";

export class BusinessInformation {
  constructor(
    private readonly businessRepository: BusinessRepository,
    private readonly logger: Logger
  ) {}

  async getBussinesById(businessId: string): Promise<Business> {
    this.logger.info(
      `[BusinessInformation] - Fetching information of bussines: ${businessId}`
    );

    const business = await this.businessRepository.getById(businessId);

    if (!business) {
      const error = new Error(`business not found: ${businessId}`);
      this.logger.error(error.message);
      throw error;
    }

    this.logger.info(
      "[BusinessInformation] - Business information successfuly fetched"
    );
    return business;
  }
}
