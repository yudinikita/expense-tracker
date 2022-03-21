import { User } from '../graphql/__generated__/graphql.types.gen.js'
import { I18next } from 'i18next-http-middleware'

declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      request: RequestType
      user: User
      i18n: I18next
    }
  }
}
