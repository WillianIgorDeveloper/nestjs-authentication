import { Module } from "@nestjs/common"
import { DeleteUserController } from "./delete-user.controller"
import { DeleteUserService } from "./delete-user.service"

@Module({
  providers: [DeleteUserService],
  controllers: [DeleteUserController],
})
export class DeleteUserModule {}
