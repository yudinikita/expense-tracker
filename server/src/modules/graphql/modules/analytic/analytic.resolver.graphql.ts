import { ApolloError } from 'apollo-server-fastify'
import { Resolvers } from '../../__generated__/graphql.types.gen.js'
import {
  getAnalyticsAverage,
  getAnalyticsBalance,
  getAnalyticsExpense,
  getAnalyticsIncome,
  getBalance
} from '../../../service/analytic/index.js'
import constants from '../../../constants/constants.js'

export const resolvers: Resolvers = {
  Query: {
    balance: async (_root, args, context, _info) => {
      try {
        const user = context?.user
        const input = args?.input
        return await getBalance(user, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    analyticsBalance: async (_root, args, context, _info) => {
      try {
        const user = context?.user
        const input = args?.input
        return await getAnalyticsBalance(user, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    analyticsAverage: async (_root, args, context, _info) => {
      try {
        const user = context?.user
        const input = args?.input
        return await getAnalyticsAverage(user, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    analyticsExpense: async (_root, args, context, _info) => {
      try {
        const user = context?.user
        const input = args?.input
        return await getAnalyticsExpense(user, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    analyticsIncome: async (_root, args, context, _info) => {
      try {
        const user = context?.user
        const input = args?.input
        return await getAnalyticsIncome(user, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  }
}
