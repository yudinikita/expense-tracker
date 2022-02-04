import { AuthenticationError, ForbiddenError } from 'apollo-server-fastify'
import { Resolvers, UserRegistrationInput } from '../../__generated__/graphql.types.gen.js'
import { activate, inputValidation, login, registration } from '../../../service/user/index.js'
import constants from '../../../constants/constants.js'

export const resolvers: Resolvers = {
  Mutation: {
    registration: async (_root, args, _context, _info) => {
      const email = args.input.email
      const password = args.input.password

      const validInput: UserRegistrationInput = await inputValidation.validateAsync({ email, password })

      const user = await registration(validInput.email, validInput.password)

      return { ...user }
    },
    activate: async (_root, args, context, _info) => {
      const user = context?.user ?? null

      if (user === null) throw new AuthenticationError(constants.GRAPHQL.MESSAGE.AUTH_ERROR)
      if (user.isActivated) throw new ForbiddenError(constants.GRAPHQL.MESSAGE.ACTIVATION_ERROR)

      const activationCode = args.input?.code ?? ''
      const userId = user.id

      const activatedUser = await activate(userId, activationCode)

      return { ...activatedUser }
    },
    login: async (_root, args, _context, _info) => {
      const email = args.input.email
      const password = args.input.password

      const validInput: UserRegistrationInput = await inputValidation.validateAsync({ email, password })

      const user = await login(validInput.email, validInput.password)

      return { ...user }
    }
  },
  User: {
    id: parent => {
      // @ts-expect-error
      return parent._id
    }
  }
}
