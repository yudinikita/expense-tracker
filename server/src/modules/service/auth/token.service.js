import { createSigner, createVerifier } from 'fast-jwt'
import constants from '../../constants/constants.js'

class TokenService {
  async generateToken (payload) {
    const JWT_SECRET = process.env.JWT_ACCESS_SECRET
    const EXPIRES_IN = Number(constants.JWT.EXPIRES_IN)

    const signer = createSigner({
      key: async () => JWT_SECRET,
      expiresIn: EXPIRES_IN
    })

    const token = await signer(payload)

    return { accessToken: token }
  }

  async validateAccessToken (token) {
    const JWT_SECRET = process.env.JWT_ACCESS_SECRET

    const verifier = createVerifier({ key: JWT_SECRET })

    return verifier(token)
  }
}

export default new TokenService()
