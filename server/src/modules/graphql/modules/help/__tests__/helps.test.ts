import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import HelpModule from '../help.module.graphql.js'
import { getContext } from '../../../../utils/test/index.js'

describe('GraphQL modules', () => {

  describe('Help resolvers', () => {

    describe('Helps', () => {

      let app: Application

      beforeAll(async () => {
        await connectTestDb()

        app = testkit.testModule(HelpModule)
      })

      afterEach(async () => {
        await clearTestDb()
      })

      afterAll(async () => {
        await disconnectTestDb()
      })

      it('should return empty helps', async () => {
        const helpsResponse = await testkit.execute(app, {
          document: HELPS,
          contextValue: await getContext()
        })

        expect(helpsResponse.errors).toBeUndefined()
        expect(helpsResponse.data).toEqual({ helps: [] })
      })

    })

  })

})

const HELPS = gql`
  query {
    helps {
      id
      title
    }
  }
`
