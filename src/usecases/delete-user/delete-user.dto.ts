import { IsNotEmpty, IsString, IsUUID } from "class-validator"

export class DeleteUserDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userID: string
}
