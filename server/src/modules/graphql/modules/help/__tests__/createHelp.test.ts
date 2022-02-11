import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import HelpModule from '../help.module.graphql.js'
import { getContext } from '../../../../utils/test/index.js'
import { CreateHelpInput } from '../../../__generated__/graphql.types.gen.js'

describe('GraphQL modules', () => {

  describe('Help resolvers', () => {

    describe('Create help', () => {

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

      it('should return created help', async () => {
        const createHelpInput: CreateHelpInput = {
          title: 'Help me, please!',
          detail: 'About help'
        }

        const createHelpResponse = await testkit.execute(app, {
          document: CREATE_HELP,
          contextValue: await getContext(),
          variableValues: { input: createHelpInput }
        })

        expect(createHelpResponse.errors).toBeUndefined()
        expect(createHelpResponse.data).toEqual({ createHelp: createHelpInput })
      })

    })

  })

})

const CREATE_HELP = gql`
  mutation createHelp($input: CreateHelpInput) {
    createHelp(input: $input) {
      title
      detail
    }
  }
`
