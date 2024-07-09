export interface IGenerateTokenByIdParams {
  id: string
}

interface IGenerateTokenByIdResponse {
  token: string
}

export interface IGenerateTokenById {
  execute(params: IGenerateTokenByIdParams): Promise<IGenerateTokenByIdResponse>
}
