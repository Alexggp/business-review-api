import { Business } from "./business";

export interface BusinessRepository {
  getById(businessId: string): Promise<Business | null>;
  updateReview(businessId: string): Promise<boolean>;
}
