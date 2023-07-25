import { IsInt, IsString, Length, Max, Min } from "class-validator";

export class reviewDto {
  @IsString()
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
