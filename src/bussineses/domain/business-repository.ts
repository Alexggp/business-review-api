import { Business } from "./business";

export interface BusinessRepository {
  getById(businessId: string): Promise<Business | null>;
}
