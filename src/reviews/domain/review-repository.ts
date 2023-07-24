import { Review } from "./review";

export interface ReviewRepository {
  getByBussinesId(businessId: string): Promise<Review[]>;
}
