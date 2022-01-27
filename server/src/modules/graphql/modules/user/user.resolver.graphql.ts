import { AuthenticationError, ForbiddenError } from 'apollo-server-fastify'
import { Resolvers } from '../../__generated__/graphql.types.gen.js'
import { activate, inputValidation, login, registration } from '../../../service/user/index.js'

export const resolvers: Resolvers = {
  Mutation: {
    registration: async (_root, args, _context, _info) => {
      const email = args.userInput?.email ?? ''
      const password = args.userInput?.password ?? ''

      const userInput = await inputValidation({ email, password })

      const userData = await registration(userInput.email, userInput.password)

      return {
        ...userData.user,
        accessToken: userData.accessToken
      }
    },
    activate: async (_root, args, context, _info) => {
      const user = context?.user ?? null

      if (user === null) throw new AuthenticationError('Ошибка авторизации')
      if (user.isActivated) throw new ForbiddenError('Аккаунт уже активирован')

      const activationCode = args.activationCode ?? ''
      const userId = user.id

      const userData = await activate(userId, activationCode)

      return {
        ...userData.user,
        accessToken: userData.accessToken
      }
    },
    login: async (_root, args, _context, _info) => {
      const email = args.userInput?.email ?? ''
      const password = args.userInput?.password ?? ''

      const userData = await login(email, password)

      return {
        ...userData.user,
        accessToken: userData.accessToken
      }
    }
  }
}
