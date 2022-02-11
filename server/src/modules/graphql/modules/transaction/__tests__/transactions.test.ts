import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import TransactionModule from '../transaction.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { CategoryModel, TransactionModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Transaction resolvers', () => {

    describe('Transactions', () => {

      let app: Application

      beforeAll(async () => {
        await connectTestDb()

        app = testkit.testModule(TransactionModule, {
          inheritTypeDefs: [CategoryModule]
        })
      })

      afterEach(async () => {
        await clearTestDb()
      })

      afterAll(async () => {
        await disconnectTestDb()
      })

      it('should return empty transactions', async () => {
        const transactionsResponse = await testkit.execute(app, {
          document: TRANSACTIONS,
          contextValue: await getContext()
        })

        expect(transactionsResponse.errors).toBeUndefined()
        expect(transactionsResponse.data).toEqual({
          transactions: []
        })
      })

      it('should return one transaction', async () => {
        const user = await getUser()

        const newCategory = await CategoryModel.create({ user: user.id, title: 'New Category' })

        const testTransaction = {
          user: user.id,
          amount: 42,
          category: String(newCategory._id)
        }

        await TransactionModel.create(testTransaction)

        const transactionsResponse = await testkit.execute(app, {
          document: TRANSACTIONS,
          contextValue: await getContext()
        })

        expect(transactionsResponse.errors).toBeUndefined()
        expect(transactionsResponse.data).toEqual({
          transactions: [{
            user: testTransaction.user,
            amount: testTransaction.amount
          }]
        })
      })

    })

  })

})

const TRANSACTIONS = gql`
  query transactions($input: TransactionsInput) {
    transactions(input: $input) {
      user
      amount
    }
  }
`
