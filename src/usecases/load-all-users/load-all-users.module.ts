import { Module } from "@nestjs/common"
import { LoadAllUsersController } from "./load-all-users.controller"
import { LoadAllUsersService } from "./load-all-users.service"

@Module({
  providers: [LoadAllUsersService],
  controllers: [LoadAllUsersController],
})
export class LoadAllUsersModule {}
