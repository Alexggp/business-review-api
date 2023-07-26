import { IsInt, IsString, Length, Matches, Max, Min } from "class-validator";

export class postReviewDto {
  @IsString()
  @Matches(/^[0-9a-fA-F]{24}$/)
  business_id: string;
  @IsString()
  user_name: string;
  @IsString()
  @Length(20, 500)
  text: string;
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
