import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import AnalyticModule from '../analytic.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import { getContext } from '../../../../utils/test/index.js'

describe('GraphQL modules', () => {

  describe('Analytic', () => {

    let app: Application

    beforeAll(async () => {
      await connectTestDb()

      app = testkit.testModule(AnalyticModule, {
        inheritTypeDefs: [CategoryModule]
      })
    })

    afterEach(async () => {
      await clearTestDb()
    })

    afterAll(async () => {
      await disconnectTestDb()
    })

    it('should be defined', () => {
      expect(app.schema.getQueryType()).toBeDefined()
    })

    it('should return null balance', async () => {
      const balanceResponse = await testkit.execute(app, {
        document: BALANCE,
        contextValue: await getContext()
      })

      expect(balanceResponse.errors).toBeUndefined()
      expect(balanceResponse.data).toEqual({
        balance: null
      })
    })

    it('should return analytics balance with zero expense and income', async () => {
      const analyticsBalanceResponse = await testkit.execute(app, {
        document: ANALYTICS_BALANCE,
        contextValue: await getContext()
      })

      expect(analyticsBalanceResponse.errors).toBeUndefined()
      expect(analyticsBalanceResponse.data).toEqual({
        analyticsBalance: {
          income: 0,
          expense: 0,
          remainder: 0,
        }
      })
    })

    it('should return analytics average with zero expense and income', async () => {
      const analyticsAverageResponse = await testkit.execute(app, {
        document: ANALYTICS_AVERAGE,
        contextValue: await getContext()
      })

      expect(analyticsAverageResponse.errors).toBeUndefined()
      expect(analyticsAverageResponse.data).toEqual({
        analyticsAverage: {
          income: 0,
          expense: 0,
          remainder: 0,
        }
      })
    })

    it('should return analytics expense with empty array', async () => {
      const analyticsExpenseResponse = await testkit.execute(app, {
        document: ANALYTICS_EXPENSE,
        contextValue: await getContext()
      })

      expect(analyticsExpenseResponse.errors).toBeUndefined()
      expect(analyticsExpenseResponse.data).toEqual({
        analyticsExpense: []
      })
    })

    it('should return analytics income with empty array', async () => {
      const analyticsIncomeResponse = await testkit.execute(app, {
        document: ANALYTICS_INCOME,
        contextValue: await getContext()
      })

      expect(analyticsIncomeResponse.errors).toBeUndefined()
      expect(analyticsIncomeResponse.data).toEqual({
        analyticsIncome: []
      })
    })

  })

})

const BALANCE = gql`
  query {
    balance {
      count
      totalAmount
    }
  }
`

const ANALYTICS_BALANCE = gql`
  query {
    analyticsBalance {
      income
      expense
      remainder
    }
  }
`

const ANALYTICS_AVERAGE = gql`
  query {
    analyticsAverage {
      income
      expense
      remainder
    }
  }
`

const ANALYTICS_EXPENSE = gql`
  query {
    analyticsExpense {
      amount
      category {
        id
        title
      }
    }
  }
`

const ANALYTICS_INCOME = gql`
  query {
    analyticsIncome {
      amount
      category {
        id
        title
      }
    }
  }
`
