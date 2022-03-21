import { Resolvers } from '../../__generated__/graphql.types.gen.js'
import { activate, inputValidation, login, registration } from '../../../service/user/index.js'
import constants from '../../../constants/constants.js'

export const resolvers: Resolvers = {
  Mutation: {
    registration: async (_root, args, context, _info) => {
      const email = args.input.email
      const password = args.input.password

      const validInput = inputValidation.validate({ email, password })

      if (validInput?.error || !validInput?.value) return {
        code: '400',
        success: false,
        message: validInput.error?.message
      }

      return await registration(validInput?.value?.email, validInput?.value?.password, context?.i18n?.language)
    },
    activate: async (_root, args, context, _info) => {
      const user = context?.user ?? undefined

      if (!user) return {
        code: '400',
        success: false,
        message: constants.GRAPHQL.MESSAGE.AUTH_ERROR
      }

      if (user.isActivated) return {
        code: '400',
        success: false,
        message: constants.GRAPHQL.MESSAGE.ACTIVATION_ERROR
      }

      const activationCode = args.input?.code ?? ''
      const userId = user.id

      return await activate(userId, activationCode)
    },
    login: async (_root, args, _context, _info) => {
      const email = args?.input?.email
      const password = args?.input?.password

      const validInput = inputValidation.validate({ email, password })

      if (validInput?.error || !validInput?.value) return {
        code: '400',
        success: false,
        message: validInput.error?.message
      }

      return await login(validInput?.value?.email, validInput?.value?.password)
    }
  },
  User: {
    id: parent => {
      // @ts-expect-error
      return parent._id
    }
  }
}
