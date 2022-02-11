import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import CategoryModule from '../category.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { CategoryInput } from '../../../__generated__/graphql.types.gen.js'
import { CategoryModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Category resolvers', () => {

    describe('Update category', () => {

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

      it('should return updated category', async () => {
        const user = await getUser()
        const newCategory = await CategoryModel.create({ user: user.id, title: 'New category' })
        const newCategoryId = String(newCategory._id)

        const input: CategoryInput = {
          title: 'Updated category'
        }

        const updateCategoryResponse = await testkit.execute(app, {
          document: UPDATE_CATEGORY,
          contextValue: await getContext(),
          variableValues: { id: newCategoryId, input }
        })

        expect(updateCategoryResponse.errors).toBeUndefined()
        expect(updateCategoryResponse.data).toEqual({
          updateCategory: {
            title: input.title
          }
        })
      })

    })

  })

})

const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: String, $input: CategoryInput) {
    updateCategory(id: $id, input: $input) {
      title
    }
  }
`
