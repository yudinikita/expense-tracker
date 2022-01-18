import application from '../graphql/application.js'
import TokenService from '../service/auth/token.service.js'

const schema = application.createSchemaForApollo({})

const context = ({ req }) => {
  const authorization = req?.headers?.authorization || ''

  const [typeAuth, token] = authorization.split(' ')

  if (typeAuth === 'Bearer') {
    const user = TokenService.validateAccessToken(token)
    return { user }
  }
}

export default {
  context,
  schema
}
