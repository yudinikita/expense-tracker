import constants from '../../constants/constants.js'
import { createSigner } from 'fast-jwt'

export const generateToken = async (payload: string | {}): Promise<string> => {
  const JWT_SECRET = process.env['JWT_ACCESS_SECRET']
  const EXPIRES_IN = Number(constants.JWT.EXPIRES_IN)

  const signer = createSigner({
    key: async () => JWT_SECRET,
    expiresIn: EXPIRES_IN
  })

  return await signer(payload)
}
