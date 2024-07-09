import { Body, Controller, Post } from "@nestjs/common"
import { SignInDto } from "./signin.dto"
import { SignInService } from "./signin.service"

@Controller("signin")
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  async signIn(@Body() signInDto: SignInDto) {
    return this.signInService.execute(signInDto)
  }
}
