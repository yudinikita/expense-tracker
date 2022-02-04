import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import TransactionModule from '../transaction.module.graphql.js'
import CategoryModule from '../../category/category.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { CategoryModel, TransactionModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Transaction', () => {

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

    it('should be defined', () => {
      expect(app.schema.getQueryType()).toBeDefined()
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

    it('should return transaction detail', async () => {
      const user = await getUser()

      const newCategory = await CategoryModel.create({ user: user.id, title: 'New Category' })

      const testTransaction = {
        user: user.id,
        amount: 42,
        category: String(newCategory._id)
      }

      const newTransaction = await TransactionModel.create(testTransaction)

      const newTransactionId = String(newTransaction._id)

      const transactionDetailResponse = await testkit.execute(app, {
        document: TRANSACTION_DETAIL,
        contextValue: await getContext(),
        variableValues: { input: { id: newTransactionId } }
      })

      expect(transactionDetailResponse.errors).toBeUndefined()
      expect(transactionDetailResponse.data).toEqual({
        transactionDetail: {
          id: newTransactionId,
          user: testTransaction.user,
          amount: testTransaction.amount
        }
      })
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

const TRANSACTIONS = gql`
  query transactions($input: TransactionsInput) {
    transactions(input: $input) {
      user
      amount
    }
  }
`

const TRANSACTION_DETAIL = gql`
  query transactionDetail($input: TransactionDetailInput) {
    transactionDetail(input: $input) {
      id
      user
      amount
    }
  }
`

const CREATE_TRANSACTION = gql`
  mutation createTransaction($input: TransactionInput) {
    createTransaction(input: $input) {
      amount
    }
  }
`

const DELETE_TRANSACTION = gql`
  mutation deleteTransaction($input: DeleteTransactionInput) {
    deleteTransaction(input: $input) {
      success
    }
  }
`

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
