const { AuthenticationError, ForbiddenError, ApolloError, UserInputError } = require('apollo-server-express')
const UserValidation = require('../../../validation/user.validation')
const UserService = require('../../../service/auth/user.service')

module.exports = {
  Mutation: {
    registration: async (root, args, context, info) => {
      const { email, password } = args?.userInput

      const userInput = await UserValidation.validateAsync({ email, password })

      const userData = await UserService.registration(userInput.email, userInput.password)

      return {
        id: userData.user.id,
        email: userData.user.email,
        isActivated: userData.user.isActivated,
        accessToken: userData.accessToken,
        settings: userData.user.settings
      }
    },
    activate: async (root, args, context, info) => {
      const user = context?.user
      if (!user) return new AuthenticationError('Ошибка авторизации')
      if (user?.isActivated) return new ForbiddenError('Аккаунт уже активирован')
      
      const { activationCode } = args
      const { id } = user
      const userData = await UserService.activate(id, activationCode)

      return {
        id: userData.user.id,
        email: userData.user.email,
        isActivated: userData.user.isActivated,
        accessToken: userData.accessToken,
        settings: userData.user.settings
      }
    },
    login: async (root, args, context, info) => {
      const { email, password } = args.userInput

      const userData = await UserService.login(email, password)

      return {
        id: userData.user.id,
        email: userData.user.email,
        isActivated: userData.user.isActivated,
        accessToken: userData.accessToken,
        settings: userData.user.settings
      }
    },
  }
}
