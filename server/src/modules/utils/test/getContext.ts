import { User } from '../../graphql/__generated__/graphql.types.gen.js'
import { getUser } from './user/index.js'

export const getContext = async (): Promise<{ user: User }> => {
  const user = await getUser()
  return { user }
}
