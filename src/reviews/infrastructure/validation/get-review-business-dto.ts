import { IsString, Matches } from "class-validator";

export class getReviewBusinessDto {
  @IsString()
  @Matches(/^[0-9a-fA-F]{24}$/)
  businessId: string;
}
