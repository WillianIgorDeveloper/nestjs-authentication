import { IGenerateTokenById, IGenerateTokenByIdParams } from "@/core/usecases"
import { Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class GenerateTokenByIdService implements IGenerateTokenById {
  constructor(private jwtService: JwtService) {}
  async execute(params: IGenerateTokenByIdParams) {
    const token = await this.jwtService.signAsync({ id: params.id })
    return { token }
  }
}
