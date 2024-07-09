import { IDeleteUser } from "@/core/usecases"
import { PrismaService } from "@/provides"
import { BadRequestException, Injectable } from "@nestjs/common"
import { DeleteUserDto } from "./delete-user.dto"

@Injectable()
export class DeleteUserService implements IDeleteUser {
  constructor(private prisma: PrismaService) {}

  async execute(params: DeleteUserDto) {
    const { userID } = params

    const user = await this.prisma.user.findUnique({
      where: {
        id: userID,
      },
    })

    if (!user) {
      throw new BadRequestException("User not found")
    }

    await this.prisma.user.delete({
      where: {
        id: userID,
      },
    })

    return
  }
}
