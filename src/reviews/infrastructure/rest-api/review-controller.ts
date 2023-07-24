import { Request, Response } from "express";

import { ReviewsOfABusiness } from "../../application/reviews-of-a-business";

export class ReviewController {
  constructor(private readonly reviewsOfABusiness: ReviewsOfABusiness) {}

  async getReviewsOfABusiness(req: Request, res: Response) {
    const { businessId: businessId } = req.params;
    const reviews = await this.reviewsOfABusiness.getByBussinesId(businessId);
    res.status(200).send(reviews);
  }
}
