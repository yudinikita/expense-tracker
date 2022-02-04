import { ApolloError } from 'apollo-server-fastify'
import constants from '../../../constants/constants.js'
import { Resolvers } from '../../__generated__/graphql.types.gen.js'
import { createHelp, getHelpDetail, getHelps, updateHelp } from '../../../service/help/index.js'

export const resolvers: Resolvers = {
  Query: {
    helps: async (_root, _args, context, _info) => {
      try {
        const user = context?.user
        return await getHelps(user)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    helpDetail: async (_root, args, context, _info) => {
      try {
        const user = context?.user
        const input = args.input
        return await getHelpDetail(user, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  },
  Mutation: {
    createHelp: async (_root, args, context, _info) => {
      try {
        const user = context?.user
        const input = args.input
        return await createHelp(user, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    updateHelp: async (_root, args, _context, _info) => {
      try {
        const input = args.input
        return await updateHelp(input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  }
}
