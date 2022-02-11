import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import CategoryModule from '../category.module.graphql.js'
import { getContext } from '../../../../utils/test/index.js'
import { CategoryInput } from '../../../__generated__/graphql.types.gen.js'

describe('GraphQL modules', () => {

  describe('Category resolvers', () => {

    describe('Create category', () => {

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

      it('should return new category', async () => {
        const input: CategoryInput = {
          title: 'New category'
        }

        const newCategoryResponse = await testkit.execute(app, {
          document: CREATE_CATEGORY,
          contextValue: await getContext(),
          variableValues: { input }
        })

        expect(newCategoryResponse.errors).toBeUndefined()
        expect(newCategoryResponse.data).toEqual({
          createCategory: {
            title: input.title
          }
        })
      })
      
    })

  })

})

const CREATE_CATEGORY = gql`
  mutation createCategory($input: CategoryInput) {
    createCategory(input: $input) {
      title
    }
  }
`
