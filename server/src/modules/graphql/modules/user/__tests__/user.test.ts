import 'reflect-metadata'
import { Application, gql, testkit } from 'graphql-modules'
import UserModule from '../user.module.graphql.js'
import UserSettingsModule from '../../userSettings/userSettings.module.graphql.js'
import { clearTestDb, connectTestDb, disconnectTestDb } from '../../../../config/database/index.js'
import { UserModel } from '../../../../models/index.js'

describe('GraphQL modules', () => {

  describe('User', () => {

    let app: Application

    beforeAll(async () => {
      await connectTestDb()

      app = testkit.testModule(UserModule, {
        inheritTypeDefs: [UserSettingsModule]
      })
    })

    afterEach(async () => {
      await clearTestDb()
    })

    afterAll(async () => {
      await disconnectTestDb()
    })

    it('should be defined', () => {
      expect(app.schema.getMutationType()).toBeDefined()
    })

    test('registration and login', async () => {
      const testUser = {
        email: 'test@mail.com',
        password: 'TestSuper_password123'
      }

      const registrationResponse = await testkit.execute(app, {
        document: REGISTRATION,
        variableValues: { input: testUser }
      })

      expect(registrationResponse.data).toEqual({
        registration: {
          email: testUser.email
        }
      })

      const dbUser = await UserModel.findOne({ email: testUser.email })

      expect(dbUser).toBeDefined()

      const loginResponse = await testkit.execute(app, {
        document: LOGIN,
        variableValues: { input: testUser }
      })

      expect(loginResponse.data).toEqual({
        login: {
          email: testUser.email,
          isActivated: false
        }
      })
    })

  })

})

const REGISTRATION = gql`
  mutation ($input: UserRegistrationInput) {
    registration(input: $input) {
      email
    }
  }
`

const LOGIN = gql`
  mutation ($input: UserLoginInput) {
    login(input: $input) {
      email
      isActivated
    }
  }
`
