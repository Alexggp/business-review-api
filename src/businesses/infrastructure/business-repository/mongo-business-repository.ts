/* eslint @typescript-eslint/no-non-null-assertion: 0 */

import {
  Business,
  BusinessOnline,
  BusinessPhysical,
} from "../../domain/business";
import { BusinessRepository } from "../../domain/business-repository";
import { BussinessesModel } from "./business-model";

export class MongoBusinessRepository implements BusinessRepository {
  async getById(id: string): Promise<Business | null> {
    const result = await BussinessesModel.findById(id);

    if (!result) {
      return null;
    }

    let business: Business;
    if (result.type === "online") {
      business = new BusinessOnline(
        result._id.toString(),
        result.name,
        result.website!,
        result.email,
        result.numberOfReviews
      );
    } else {
      business = new BusinessPhysical(
        result._id.toString(),
        result.name,
        result.address!,
        result.phone!,
        result.email,
        result.numberOfReviews
      );
    }

    return business;
  }
}
