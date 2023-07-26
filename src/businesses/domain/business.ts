export interface Business {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  numberOfReviews?: number;
  averageRating?: string;
}
export class BusinessOnline implements Business {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly website: string,
    readonly email: string
  ) {}
}
export class BusinessPhysical implements Business {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly address: string,
    readonly phone: number,
    readonly email: string
  ) {}
}
