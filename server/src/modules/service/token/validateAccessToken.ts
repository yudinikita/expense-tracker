import { createVerifier } from 'fast-jwt'

export const validateAccessToken = async (token: string): Promise<object | null> => {
  try {
    const JWT_SECRET = process.env['JWT_ACCESS_SECRET']

    const verifier = createVerifier({ key: async () => JWT_SECRET })

    return await verifier(token)
  } catch (e) {
    return null
  }
}
