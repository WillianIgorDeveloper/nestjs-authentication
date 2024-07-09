interface ISignUpParams {
  email: string
  password: string
}

interface ISignUpResponse {
  token: string
}

export interface ISignUp {
  execute(params: ISignUpParams): Promise<ISignUpResponse>
}
