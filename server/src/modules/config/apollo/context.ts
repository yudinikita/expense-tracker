import { Context } from 'apollo-server-core'
import { getCurrentUser } from '../../utils/auth/index.js'

export const context: Context = async (req: any): Promise<any> => {
  const authHeader: string = req?.request?.headers?.authorization ?? ''

  const currentUser = await getCurrentUser(authHeader)

  const i18n = req?.request?.i18n ?? {}

  return {
    user: currentUser,
    i18n
  }
}
