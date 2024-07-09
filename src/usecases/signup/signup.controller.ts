import { Body, Controller, Post } from "@nestjs/common"
import { SignUpDto } from "./signup.dto"
import { SignUpService } from "./signup.service"

@Controller("signup")
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.signUpService.execute(signUpDto)
  }
}
