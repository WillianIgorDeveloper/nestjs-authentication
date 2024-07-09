interface IDeleteUserParams {
  userID: string
}

export interface IDeleteUser {
  execute(params: IDeleteUserParams): Promise<void>
}
