import { Module } from "@nestjs/common"
import { GenerateTokenByIdService } from "./generate-token-by-id.service"
import { JwtModule } from "@nestjs/jwt"

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "5",
      signOptions: { expiresIn: "60d" },
    }),
  ],
  providers: [GenerateTokenByIdService],
  exports: [GenerateTokenByIdService],
})
export class GenerateTokenByIdModule {}
