export class Review {
  constructor(
    readonly id: string,
    readonly business_id: string,
    readonly user_name: string,
    readonly text: string,
    readonly rating: number
  ) {}
}
