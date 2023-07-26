import { Types } from "mongoose";

import { Review } from "../../domain/review";
import { ReviewRepository } from "../../domain/review-repository";
import { reviewDto } from "../validation/review-dto";
import { ReviewsModel } from "./review-model";

export class MongoReviewResository implements ReviewRepository {
  getByBussinesId(businessId: string): Promise<Review[]> {
    throw new Error("Method not implemented.");
  }
  async createNewReview(reviewData: reviewDto): Promise<Review> {
    const newReview = new ReviewsModel({
      _id: new Types.ObjectId(),
      business_id: reviewData.business_id,
      user_name: reviewData.user_name,
      text: reviewData.text,
      rating: reviewData.rating,
    });
    const response = await newReview.save();
    const addedReview = new Review(
      response._id.toString(),
      response.business_id.toString(),
      response.user_name,
      response.text,
      response.rating
    );
    return addedReview;
  }
}
