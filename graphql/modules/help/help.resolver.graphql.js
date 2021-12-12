const { AuthenticationError, ForbiddenError, ApolloError } = require('apollo-server-express')
const HelpService = require('../../../service/help.service')

module.exports = {
  Query: {
    helps: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        return await HelpService.getHelps(userId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    helpDetail: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const helpId = args?.helpId
        return await HelpService.getHelpDetail(userId, helpId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
  },
  Mutation: {
    createHelp: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const helpInput = args?.helpInput
        return await HelpService.createHelp(userId, helpInput)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    updateHelp: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const helpUpdate = args?.helpUpdate
        return await HelpService.updateHelp(helpUpdate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
  }
}
