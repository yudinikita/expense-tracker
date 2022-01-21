import application from '../graphql/application.js'
import TokenService from '../service/auth/token.service.js'

const schema = application.createSchemaForApollo()

const context = (req) => {
  const authorization = req?.request?.headers?.authorization || ''

  const [typeAuth, token] = authorization.split(' ')

  if (typeAuth === 'Bearer') {
    const user = TokenService.validateAccessToken(token)
    return { user }
  }
}

const apolloConfig = {
  context,
  schema
}

export default apolloConfig
