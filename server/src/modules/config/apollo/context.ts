import { Context } from 'apollo-server-core'
import { getCurrentUser } from '../../utils/auth/index.js'

export const context: Context = async (req: any): Promise<any> => {
  const authHeader: string = req?.request?.headers?.authorization ?? ''

  const currentUser = await getCurrentUser(authHeader)

  return {
    user: currentUser
  }
}
