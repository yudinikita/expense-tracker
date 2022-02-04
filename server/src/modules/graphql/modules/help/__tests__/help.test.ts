import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import HelpModule from '../help.module.graphql.js'
import { getContext, getUser } from '../../../../utils/test/index.js'
import { CreateHelpInput, HelpDetailInput, UpdateHelpInput } from '../../../__generated__/graphql.types.gen.js'
import { HelpModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('Help', () => {

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

    it('should be defined', () => {
      expect(app.schema.getQueryType()).toBeDefined()
    })

    it('should return empty helps', async () => {
      const helpsResponse = await testkit.execute(app, {
        document: HELPS,
        contextValue: await getContext()
      })

      expect(helpsResponse.errors).toBeUndefined()
      expect(helpsResponse.data).toEqual({ helps: [] })
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

const HELPS = gql`
  query {
    helps {
      id
      title
    }
  }
`

const HELP_DETAIL = gql`
  query helpDetail($input: HelpDetailInput) {
    helpDetail(input: $input) {
      id
      title
    }
  }
`

const CREATE_HELP = gql`
  mutation createHelp($input: CreateHelpInput) {
    createHelp(input: $input) {
      title
      detail
    }
  }
`

const UPDATE_HELP = gql`
  mutation updateHelp($input: UpdateHelpInput) {
    updateHelp(input: $input) {
      id
      solved
    }
  }
`
