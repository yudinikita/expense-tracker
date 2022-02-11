import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import TransactionModule from '../transaction.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { CategoryModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Transaction resolvers', () => {

    describe('Create transaction', () => {

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

      it('should return created transaction', async () => {
        const user = await getUser()

        const newCategory = await CategoryModel.create({ user: user.id, title: 'New Category' })

        const testTransaction = {
          amount: 42,
          category: String(newCategory._id)
        }

        const createTransactionResponse = await testkit.execute(app, {
          document: CREATE_TRANSACTION,
          contextValue: await getContext(),
          variableValues: { input: { ...testTransaction } }
        })

        expect(createTransactionResponse.errors).toBeUndefined()
        expect(createTransactionResponse.data).toEqual({
          createTransaction: {
            amount: testTransaction.amount
          }
        })
      })

    })

  })

})

const CREATE_TRANSACTION = gql`
  mutation createTransaction($input: TransactionInput) {
    createTransaction(input: $input) {
      amount
    }
  }
`
