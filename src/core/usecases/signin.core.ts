interface ISignInParams {
  email: string
  password: string
}

interface ISignInResponse {
  token: string
}

export interface ISignIn {
  execute(params: ISignInParams): Promise<ISignInResponse>
}
