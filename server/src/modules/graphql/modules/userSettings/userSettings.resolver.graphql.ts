import { ApolloError } from 'apollo-server-fastify'
import constants from '../../../constants/constants.js'
import { Resolvers } from '../../__generated__/graphql.types.gen.js'
import { getUserSettings, updateUserPassword, updateUserSettings } from '../../../service/user/index.js'

export const resolvers: Resolvers = {
  Query: {
    userSettings: async (_root, _args, context, _info) => {
      try {
        const userId = context.user.id
        return await getUserSettings(userId)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  },
  Mutation: {
    updateUserSettings: async (_root, args, context, _info) => {
      try {
        const userId = context.user.id
        const settings = args.input
        return await updateUserSettings(userId, settings)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    updateUserPassword: async (_root, args, context, _info) => {
      try {
        const userId = context?.user.id
        const input = args?.input
        return await updateUserPassword(userId, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  }
}
