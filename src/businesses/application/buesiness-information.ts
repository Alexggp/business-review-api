import { Logger } from "../../shared/domain/logger";
import { Business } from "../domain/business";
import { BusinessRepository } from "../domain/business-repository";

export class BusinessInformation {
  constructor(
    private readonly businessRepository: BusinessRepository,
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
    }

    return business;
  }
}
