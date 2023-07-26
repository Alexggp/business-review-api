import { IsString, Matches } from "class-validator";

export class getReviewDto {
  @IsString()
  @Matches(/^[0-9a-fA-F]{24}$/)
  businessId: string;
}
