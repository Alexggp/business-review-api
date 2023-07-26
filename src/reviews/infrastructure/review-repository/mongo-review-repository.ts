import { Types } from "mongoose";

import { Review } from "../../domain/review";
import { ReviewRepository } from "../../domain/review-repository";
import { postReviewDto } from "../validation/post-review-dto";
import { ReviewsModel } from "./review-model";

export class MongoReviewResository implements ReviewRepository {
  async getByBussinesId(businessId: string): Promise<Review[]> {
    const filter = {
      business_id: businessId,
    };
    const response = await ReviewsModel.find(filter);
    const reviewsList = response.map(
      (r) =>
        new Review(
          r._id.toString(),
          r.business_id.toString(),
          r.user_name,
          r.text,
          r.rating
        )
    );
    return reviewsList;
  }
  async createNewReview(reviewData: postReviewDto): Promise<Review> {
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
