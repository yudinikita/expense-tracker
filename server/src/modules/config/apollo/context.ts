import TokenService from '../../service/auth/token.service.js'

export const context = async (req: any): Promise<any> => {
  const authorization: string = req?.request?.headers?.authorization ?? ''

  const [typeAuth, token]: string[] = authorization.split(' ')

  if (typeAuth === 'Bearer') {
    const user = await TokenService.validateAccessToken(token)
    return { user }
  }
}
