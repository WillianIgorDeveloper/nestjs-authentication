import { GenerateTokenByIdModule } from "@/provides"
import { Module } from "@nestjs/common"
import { SignInController } from "./signin.controller"
import { SignInService } from "./signin.service"

@Module({
  imports: [GenerateTokenByIdModule],
  providers: [SignInService],
  controllers: [SignInController],
})
export class SignInModule {}
