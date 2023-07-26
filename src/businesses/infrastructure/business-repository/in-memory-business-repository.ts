import { Business } from "../../domain/business";
import { BusinessRepository } from "../../domain/business-repository";
import { BUSINESSES } from "./businesses";

export class InMemoryBusinessRepository implements BusinessRepository {
  updateReview(businessId: string): Promise<boolean> {
    console.log(businessId);
    throw new Error("Method not implemented.");
  }
  async getById(id: string): Promise<Business | null> {
    const business = BUSINESSES.find((b) => b.id === id);

    if (!business) {
      return null;
    }

    return business;
  }
}
