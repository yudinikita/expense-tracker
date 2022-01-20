import { ApolloError } from 'apollo-server-fastify'
import { withAuth } from '../../../utils/auth.js'
import HelpService from '../../../service/help.service.js'

export default {
  Query: {
    helps: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        return await HelpService.getHelps(userId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    helpDetail: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const helpId = args?.helpId
        return await HelpService.getHelpDetail(userId, helpId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  },
  Mutation: {
    createHelp: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const helpInput = args?.helpInput
        return await HelpService.createHelp(userId, helpInput)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    updateHelp: withAuth(async (root, args, context, info) => {
      try {
        const helpUpdate = args?.helpUpdate
        return await HelpService.updateHelp(helpUpdate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  }
}
