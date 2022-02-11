import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import UserSettingsModule from '../userSettings.module.graphql.js'
import { getContext, testUserInput } from '../../../../utils/test/index.js'
import { Settings, UserPasswordInput } from '../../../__generated__/graphql.types.gen.js'
import { CommonModule } from '../../common/index.js'

describe('GraphQL modules', () => {

  describe('User Settings resolvers', () => {

    let app: Application

    beforeAll(async () => {
      await connectTestDb()

      app = testkit.testModule(UserSettingsModule, {
        inheritTypeDefs: [CommonModule]
      })
    })

    afterEach(async () => {
      await clearTestDb()
    })

    afterAll(async () => {
      await disconnectTestDb()
    })

    it('should return default settings', async () => {
      const userSettingsResponse = await testkit.execute(app, {
        document: USER_SETTINGS,
        contextValue: await getContext()
      })

      const defaultSettings: Settings = {
        theme: 'light',
        currency: 'RUB',
        language: 'ru',
      }

      expect(userSettingsResponse.errors).toBeUndefined()
      expect(userSettingsResponse.data).toEqual({ userSettings: defaultSettings })
    })

    it('should return updated settings', async () => {
      const newSettings: Settings = {
        theme: 'light',
        currency: 'RUB',
        language: 'ru',
      }

      const updateUserSettingsResponse = await testkit.execute(app, {
        document: UPDATE_USER_SETTINGS,
        contextValue: await getContext(),
        variableValues: { input: newSettings }
      })

      expect(updateUserSettingsResponse.errors).toBeUndefined()
      expect(updateUserSettingsResponse.data).toEqual({ updateUserSettings: newSettings })
    })

    it('should return success for updated password', async () => {
      const nowPassword = testUserInput.password
      const newPassword = 'Test_New_Password123'

      const input: UserPasswordInput = { nowPassword, newPassword }

      const updateUserSettingsResponse = await testkit.execute(app, {
        document: UPDATE_USER_PASSWORD,
        contextValue: await getContext(),
        variableValues: { input }
      })

      expect(updateUserSettingsResponse.errors).toBeUndefined()
      expect(updateUserSettingsResponse.data).toEqual({ updateUserPassword: { success: true } })
    })

  })

})

const USER_SETTINGS = gql`
  query {
    userSettings {
      theme
      currency
      language
    }
  }
`

const UPDATE_USER_SETTINGS = gql`
  mutation updateUserSettings($input: SettingsInput){
    updateUserSettings(input: $input) {
      theme
      currency
      language
    }
  }
`

const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($input: UserPasswordInput){
    updateUserPassword(input: $input) {
      success
    }
  }
`
