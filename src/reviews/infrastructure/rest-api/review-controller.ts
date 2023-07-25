import { Request, Response } from "express";

import { CreateNewReview } from "../../application/create-new-review";
import { ReviewsOfABusiness } from "../../application/reviews-of-a-business";

export class ReviewController {
  constructor(
    private readonly reviewsOfABusiness: ReviewsOfABusiness,
    private readonly createNewReview: CreateNewReview
  ) {}

  async getReviewsOfABusiness(req: Request, res: Response) {
    const { businessId: businessId } = req.params;
    const reviews = await this.reviewsOfABusiness.getByBussinesId(businessId);
    res.status(200).send(reviews);
  }
  async postNewReview(req: Request, res: Response) {
    const data = req.body;
    const review = await this.createNewReview.createNewReview(data);
    res.status(200).send(review);
  }
}
