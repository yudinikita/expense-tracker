import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import AnalyticModule from '../analytic.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import { getContext } from '../../../../utils/test/index.js'

describe('GraphQL modules', () => {

  describe('Analytic resolvers', () => {

    describe('Analytics income', () => {

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

})

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
