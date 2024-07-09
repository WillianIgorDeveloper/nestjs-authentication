import { Controller, Get, UseGuards } from "@nestjs/common"
import { LoadAllUsersService } from "./load-all-users.service"
import { AuthGuard } from "@/provides"

@Controller("loadAllUsers")
export class LoadAllUsersController {
  constructor(private readonly LoadAllUsersService: LoadAllUsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  async loadAllUsers() {
    return this.LoadAllUsersService.execute()
  }
}
