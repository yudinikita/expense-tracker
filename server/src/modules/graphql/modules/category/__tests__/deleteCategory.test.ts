import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import CategoryModule from '../category.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { CategoryDeleteInput } from '../../../__generated__/graphql.types.gen.js'
import { CategoryModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Category resolvers', () => {

    describe('Delete category', () => {

      let app: Application

      beforeAll(async () => {
        await connectTestDb()

        app = testkit.testModule(CategoryModule)
      })

      afterEach(async () => {
        await clearTestDb()
      })

      afterAll(async () => {
        await disconnectTestDb()
      })

      it('should return payload deleted category', async () => {
        const user = await getUser()
        const newCategory = await CategoryModel.create({ user: user.id, title: 'New category' })
        const newCategoryId = String(newCategory._id)

        const input: CategoryDeleteInput = { id: newCategoryId }

        const deleteCategoryResponse = await testkit.execute(app, {
          document: DELETE_CATEGORY,
          contextValue: await getContext(),
          variableValues: { input }
        })

        expect(deleteCategoryResponse.errors).toBeUndefined()
        expect(deleteCategoryResponse.data).toEqual({
          deleteCategory: {
            id: input.id,
            success: true,
          }
        })
      })

      it('should return payload deleted category replace', async () => {
        const user = await getUser()

        const oneNewCategory = await CategoryModel.create({ user: user.id, title: 'New category number one' })
        const twoNewCategory = await CategoryModel.create({ user: user.id, title: 'New category number two' })

        const oneNewCategoryId = String(oneNewCategory._id)
        const twoNewCategoryId = String(twoNewCategory._id)

        const input: CategoryDeleteInput = {
          id: oneNewCategoryId,
          newId: twoNewCategoryId
        }

        const deleteCategoryReplaceResponse = await testkit.execute(app, {
          document: DELETE_CATEGORY_REPLACE,
          contextValue: await getContext(),
          variableValues: { input }
        })

        expect(deleteCategoryReplaceResponse.errors).toBeUndefined()
        expect(deleteCategoryReplaceResponse.data).toEqual({
          deleteCategoryReplace: {
            id: input.id,
            success: true,
          }
        })
      })

      it('should return payload deleted category with transactions', async () => {
        const user = await getUser()
        const newCategory = await CategoryModel.create({ user: user.id, title: 'New category' })
        const newCategoryId = String(newCategory._id)

        const input: CategoryDeleteInput = { id: newCategoryId }

        const deleteCategoryWithTransactionsResponse = await testkit.execute(app, {
          document: DELETE_CATEGORY_WITH_TRANSACTIONS,
          contextValue: await getContext(),
          variableValues: { input }
        })

        expect(deleteCategoryWithTransactionsResponse.errors).toBeUndefined()
        expect(deleteCategoryWithTransactionsResponse.data).toEqual({
          deleteCategoryWithTransactions: {
            id: input.id,
            success: true,
          }
        })
      })

    })

  })

})

const DELETE_CATEGORY = gql`
  mutation deleteCategory($input: CategoryDeleteInput) {
    deleteCategory(input: $input) {
      id
      success
    }
  }
`

const DELETE_CATEGORY_REPLACE = gql`
  mutation deleteCategoryReplace($input: CategoryDeleteInput) {
    deleteCategoryReplace(input: $input) {
      id
      success
    }
  }
`

const DELETE_CATEGORY_WITH_TRANSACTIONS = gql`
  mutation deleteCategoryWithTransactions($input: CategoryDeleteInput) {
    deleteCategoryWithTransactions(input: $input) {
      id
      success
    }
  }
`
