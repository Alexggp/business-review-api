export interface Business {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly numberOfReviews: number;
  averageRating?: string;
}
export class BusinessOnline implements Business {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly website: string,
    readonly email: string,
    readonly numberOfReviews: number
  ) {}
}
export class BusinessPhysical implements Business {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly address: string,
    readonly phone: number,
    readonly email: string,
    readonly numberOfReviews: number
  ) {}
}
