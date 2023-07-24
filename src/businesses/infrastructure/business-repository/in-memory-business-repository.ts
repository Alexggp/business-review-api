import { Business } from "../../domain/business";
import { BusinessRepository } from "../../domain/business-repository";
import { BUSINESSES } from "./businesses";

export class InMemoryBusinessRepository implements BusinessRepository {
  async getById(id: string): Promise<Business | null> {
    const business = BUSINESSES.find((b) => b.id === id);

    if (!business) {
      return null;
    }

    return business;
  }
}
