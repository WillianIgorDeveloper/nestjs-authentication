import { ILoadAllUsers } from "@/core/usecases"
import { PrismaService } from "@/provides"
import { Injectable } from "@nestjs/common"

@Injectable()
export class LoadAllUsersService implements ILoadAllUsers {
  constructor(private prisma: PrismaService) {}

  async execute() {
    const users = await this.prisma.user.findMany()

    return { users }
  }
}
