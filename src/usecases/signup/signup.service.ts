import { hash } from "node:crypto"
import { ISignUp } from "@/core/usecases"
import { GenerateTokenByIdService, PrismaService } from "@/provides"
import { Injectable, NotAcceptableException } from "@nestjs/common"
import { SignUpDto } from "./signup.dto"

@Injectable()
export class SignUpService implements ISignUp {
  constructor(
    private prisma: PrismaService,
    private generateTokenByIdService: GenerateTokenByIdService,
  ) {}

  async execute(signUpDto: SignUpDto) {
    const { email, password } = signUpDto

    const user = await this.prisma.user.findUnique({
      where: { email },
    })

    if (user) {
      throw new NotAcceptableException("This email is already in use")
    }

    const newUser = await this.prisma.user.create({
      data: {
        email,
        password: hash("sha1", password),
      },
    })

    const token = await this.generateTokenByIdService.execute({ id: newUser.id })

    return token
  }
}
