import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import AnalyticModule from '../analytic.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import { getContext } from '../../../../utils/test/index.js'

describe('GraphQL modules', () => {

  describe('Analytic resolvers', () => {

    describe('Balance', () => {

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
