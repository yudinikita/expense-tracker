import { ApolloError } from 'apollo-server-fastify'
import { withAuth } from '../../../utils/auth.js'
import AnalyticsService from '../../../service/analytics.service.js'
import BalanceService from '../../../service/balance.service.js'

export default {
  Query: {
    balance: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        return await BalanceService.getBalance(userId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    balancePerDate: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await BalanceService.getBalancePerDate(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    analyticsBalance: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await AnalyticsService.getAnalyticsBalance(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    analyticsAverage: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await AnalyticsService.getAnalyticsAverage(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    analyticsExpense: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await AnalyticsService.getAnalyticsExpense(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    analyticsIncome: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await AnalyticsService.getAnalyticsIncome(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  }
}
