import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import AnalyticModule from '../analytic.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import { getContext } from '../../../../utils/test/index.js'

describe('GraphQL modules', () => {

  describe('Analytic resolvers', () => {

    describe('Analytics balance', () => {

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

    })

  })

})

const ANALYTICS_BALANCE = gql`
  query {
    analyticsBalance {
      income
      expense
      remainder
    }
  }
`
