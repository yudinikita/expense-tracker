import { UserModel } from '../../../models/index.js'
import { getPasswordConfirmation } from '../../../utils/auth/index.js'
import { generateToken } from '../../token/index.js'
import { UserLoginResponse } from '../../../graphql/__generated__/graphql.types.gen.js'
import constants from '../../../constants/constants.js'

export const login = async (email: string, password: string): Promise<UserLoginResponse> => {
  const user = await UserModel.findOne({ email })

  if (user === null) {
    return {
      code: '400',
      success: false,
      message: constants.GRAPHQL.MESSAGE.LOGIN_ERROR
    }
  }

  const isPassConfirm = await getPasswordConfirmation(password, user.password)

  if (!isPassConfirm) {
    return {
      code: '400',
      success: false,
      message: constants.GRAPHQL.MESSAGE.LOGIN_ERROR
    }
  }

  const accessToken = await generateToken({
    ...user.toJSON(),
    id: user._id
  })

  return {
    code: '200',
    success: true,
    message: '',
    user: { ...user.toJSON() },
    tokens: {
      accessToken,
      expiresIn: constants.JWT.EXPIRES_IN,
      tokenType: constants.JWT.TOKEN_TYPE
    }
  }
}
