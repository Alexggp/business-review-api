export class Review {
  constructor(
    readonly id: string,
    readonly business_id: string,
    readonly user_name: string,
    readonly text: string,
    readonly rating: number
  ) {}
}

export type NewReview = {
  business_id: string;
  user_name: string;
  text: string;
  rating: number;
};
