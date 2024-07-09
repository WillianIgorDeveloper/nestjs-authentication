import { hash } from "node:crypto"
import { ISignIn } from "@/core/usecases"
import { GenerateTokenByIdService, PrismaService } from "@/provides"
import { BadRequestException, Injectable } from "@nestjs/common"
import { SignInDto } from "./signin.dto"

@Injectable()
export class SignInService implements ISignIn {
  constructor(
    private prisma: PrismaService,
    private generateTokenById: GenerateTokenByIdService,
  ) {}

  async execute(signInDto: SignInDto) {
    const { email, password } = signInDto

    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      throw new BadRequestException("Email or password is incorrect")
    }

    if (user.password !== hash("sha1", password)) {
      throw new BadRequestException("Email or password is incorrect")
    }

    const token = await this.generateTokenById.execute({ id: user.id })

    return token
  }
}
