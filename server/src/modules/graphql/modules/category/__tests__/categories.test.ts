import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import CategoryModule from '../category.module.graphql.js'
import { getContext } from '../../../../utils/test/index.js'

describe('GraphQL modules', () => {

  describe('Category resolvers', () => {

    describe('Categories', () => {

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

      it('should return empty categories', async () => {
        const categoriesResponse = await testkit.execute(app, {
          document: CATEGORIES,
          contextValue: await getContext()
        })

        expect(categoriesResponse.errors).toBeUndefined()
        expect(categoriesResponse.data).toEqual({
          categories: []
        })
      })

    })

  })

})

const CATEGORIES = gql`
  query {
    categories {
      id
      title
    }
  }
`
