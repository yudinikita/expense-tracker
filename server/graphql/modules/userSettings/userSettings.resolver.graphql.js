const { AuthenticationError, ForbiddenError, ApolloError } = require('apollo-server-express')
const UserService = require('../../../service/auth/user.service')

module.exports = {
  Query: {
    userSettings: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const id = user?.id
        return await UserService.getUserSettings(id)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }
  },
  Mutation: {
    updateUserSettings: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const id = user?.id
        const settings = args?.settings
        return await UserService.updateUserSettings(id, settings)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    updateUserPassword: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const id = user?.id
        const userPasswordInput = args?.userPasswordInput
        return await UserService.updateUserPassword(id, userPasswordInput)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
  }
}
