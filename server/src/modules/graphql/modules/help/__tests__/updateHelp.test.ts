import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import HelpModule from '../help.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { UpdateHelpInput } from '../../../__generated__/graphql.types.gen.js'
import { HelpModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Help resolvers', () => {

    describe('Update help', () => {

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

      it('should return updated solve help', async () => {
        const user = await getUser()
        const newHelp = await HelpModel.create({ user: user.id, title: 'Help me, please!' })
        const newHelpId = String(newHelp._id)

        const updateHelpInput: UpdateHelpInput = {
          id: newHelpId,
          solved: true
        }

        const updateHelpResponse = await testkit.execute(app, {
          document: UPDATE_HELP,
          contextValue: await getContext(),
          variableValues: { input: updateHelpInput }
        })

        expect(updateHelpResponse.errors).toBeUndefined()
        expect(updateHelpResponse.data).toEqual({
          updateHelp: {
            id: newHelpId,
            solved: true
          }
        })
      })

    })

  })

})

const UPDATE_HELP = gql`
  mutation updateHelp($input: UpdateHelpInput) {
    updateHelp(input: $input) {
      id
      solved
    }
  }
`
