import { Users } from "@/core/entities"

interface ILoadAllUsersResponse {
  users: Users[]
}

export interface ILoadAllUsers {
  execute(): Promise<ILoadAllUsersResponse>
}
