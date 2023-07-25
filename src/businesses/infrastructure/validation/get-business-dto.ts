import { IsString, Matches } from "class-validator";

export class getBusinessDto {
  @IsString()
  @Matches(/^[0-9a-fA-F]{24}$/)
  id: string;
}
