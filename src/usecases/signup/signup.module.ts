import { Module } from "@nestjs/common"
import { SignUpController } from "./signup.controller"
import { SignUpService } from "./signup.service"
import { GenerateTokenByIdModule } from "@/provides"

@Module({
  imports: [GenerateTokenByIdModule],
  providers: [SignUpService],
  controllers: [SignUpController],
})
export class SignUpModule {}
