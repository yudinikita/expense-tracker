import jwt from 'jsonwebtoken'

class TokenService {

  async generateToken (payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30d' })

    return { accessToken }
  }

  validateAccessToken (token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET, function (err, decoded) {
        if (err) {
          return null
        }
        if (decoded) {
          return decoded
        }
        return null
      })
    } catch (error) {
      return null
    }
  }

}

export default new TokenService()