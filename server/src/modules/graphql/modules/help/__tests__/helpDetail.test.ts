import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import HelpModule from '../help.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { HelpDetailInput } from '../../../__generated__/graphql.types.gen.js'
import { HelpModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Help resolvers', () => {

    describe('Help detail', () => {

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

      it('should return help detail', async () => {
        const user = await getUser()
        const newHelp = await HelpModel.create({ user: user.id, title: 'Help me, please!' })
        const newHelpId = String(newHelp._id)

        const helpDetailInput: HelpDetailInput = {
          id: newHelpId
        }

        const helpDetailResponse = await testkit.execute(app, {
          document: HELP_DETAIL,
          contextValue: await getContext(),
          variableValues: { input: helpDetailInput }
        })

        expect(helpDetailResponse.errors).toBeUndefined()
        expect(helpDetailResponse.data).toEqual({
          helpDetail: {
            id: newHelpId,
            title: newHelp.title
          }
        })
      })

    })

  })

})

const HELP_DETAIL = gql`
  query helpDetail($input: HelpDetailInput) {
    helpDetail(input: $input) {
      id
      title
    }
  }
`
