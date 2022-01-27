import { User } from '../graphql/__generated__/graphql.types.gen.js'

declare global {
  namespace GraphQLModules {
    interface GlobalContext {
      request: RequestType
      user: User
    }
  }
}
