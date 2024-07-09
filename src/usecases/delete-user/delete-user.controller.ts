import { Controller, Delete, Param } from "@nestjs/common"
import { DeleteUserService } from "./delete-user.service"
import { DeleteUserDto } from "./delete-user.dto"

@Controller("deleteUser")
export class DeleteUserController {
  constructor(private readonly DeleteUserService: DeleteUserService) {}

  @Delete(":userID")
  async deleteUser(@Param() deleteUserDto: DeleteUserDto) {
    return this.DeleteUserService.execute(deleteUserDto)
  }
}
