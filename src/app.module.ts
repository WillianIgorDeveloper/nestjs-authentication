import { Module } from "@nestjs/common"
import { PrismaModule } from "@/provides"
import { SignInModule } from "@/usecases/signin"
import { SignUpModule } from "@/usecases/signup"
import { LoadAllUsersModule } from "@/usecases/load-all-users"
import { DeleteUserModule } from "@/usecases/delete-user"

@Module({
  imports: [
    PrismaModule,
    SignInModule,
    SignUpModule,
    LoadAllUsersModule,
    DeleteUserModule,
  ],
})
export class AppModule {}
