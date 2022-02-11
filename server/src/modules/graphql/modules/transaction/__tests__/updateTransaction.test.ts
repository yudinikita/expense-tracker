import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import TransactionModule from '../transaction.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { CategoryModel, TransactionModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Transaction resolvers', () => {

    describe('Update transaction', () => {

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

      it('should return updated transaction', async () => {
        const user = await getUser()

        const newCategory = await CategoryModel.create({ user: user.id, title: 'New Category' })

        const testTransaction = {
          user: user.id,
          amount: 42,
          category: String(newCategory._id)
        }

        const newTransaction = await TransactionModel.create(testTransaction)

        const newTransactionId = String(newTransaction._id)

        const updateTransaction = {
          amount: 123
        }

        const updateTransactionResponse = await testkit.execute(app, {
          document: UPDATE_TRANSACTION,
          contextValue: await getContext(),
          variableValues: { input: { id: newTransactionId, transaction: updateTransaction } }
        })

        expect(updateTransactionResponse.errors).toBeUndefined()
        expect(updateTransactionResponse.data).toEqual({
          updateTransaction: {
            id: newTransactionId,
            amount: updateTransaction.amount,
            category: {
              id: testTransaction.category
            }
          }
        })
      })

    })

  })

})

const UPDATE_TRANSACTION = gql`
  mutation updateTransaction($input: UpdateTransactionInput) {
    updateTransaction(input: $input) {
      id
      amount
      category {
        id
      }
    }
  }
`
