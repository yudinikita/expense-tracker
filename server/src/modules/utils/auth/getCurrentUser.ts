import { validateAccessToken } from '../../service/token/index.js'

export const getCurrentUser = async (authHeader: string): Promise<object | null> => {
  let currentUser: object | null = null

  try {
    const authHeaderArr = authHeader.split(' ')
    const typeAuth = authHeaderArr[0] ?? ''
    const authToken = authHeaderArr[1] ?? ''

    if (typeAuth === 'Bearer') {
      currentUser = await validateAccessToken(authToken)
    }
  } catch (e) {
    return null
  }

  return currentUser
}
