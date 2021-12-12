const application = require('../graphql/modules/application')
const TokenService = require('../service/auth/token.service')

const schema = application.createSchemaForApollo({})

const context = ({ req }) => {
  const authorization = req?.headers?.authorization || ''

  const [typeAuth, token] = authorization.split(' ')

  if (typeAuth === 'Bearer') {
    const user = TokenService.validateAccessToken(token)
    return { user }
  }
}

module.exports = {
  schema,
  context
}
