import { AuthenticationError, ForbiddenError, ApolloError } from 'apollo-server-express'
import AnalyticsService from '../../../service/analytics.service.js'
import BalanceService from '../../../service/balance.service.js'

export default {
  Query: {
    balance: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        return await BalanceService.getBalance(userId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    balancePerDate: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await BalanceService.getBalancePerDate(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    analyticsBalance: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await AnalyticsService.getAnalyticsBalance(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    analyticsAverage: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await AnalyticsService.getAnalyticsAverage(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    analyticsExpense: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await AnalyticsService.getAnalyticsExpense(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    analyticsIncome: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await AnalyticsService.getAnalyticsIncome(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
  }
}
