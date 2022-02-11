import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import TransactionModule from '../transaction.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { CategoryModel, TransactionModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Transaction resolvers', () => {

    describe('Delete transaction', () => {

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

      it('should return payload deleted transaction', async () => {
        const user = await getUser()

        const newCategory = await CategoryModel.create({ user: user.id, title: 'New Category' })

        const testTransaction = {
          user: user.id,
          amount: 42,
          category: String(newCategory._id)
        }

        const newTransaction = await TransactionModel.create(testTransaction)

        const newTransactionId = String(newTransaction._id)

        const deleteTransactionResponse = await testkit.execute(app, {
          document: DELETE_TRANSACTION,
          contextValue: await getContext(),
          variableValues: { input: { id: newTransactionId } }
        })

        expect(deleteTransactionResponse.errors).toBeUndefined()
        expect(deleteTransactionResponse.data).toEqual({
          deleteTransaction: {
            success: true
          }
        })
      })

    })

  })

})

const DELETE_TRANSACTION = gql`
  mutation deleteTransaction($input: DeleteTransactionInput) {
    deleteTransaction(input: $input) {
      success
    }
  }
`
