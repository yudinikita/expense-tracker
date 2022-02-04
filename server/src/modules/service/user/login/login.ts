import { UserModel } from '../../../models/index.js'
import { getPasswordConfirmation } from '../../../utils/auth/index.js'
import { generateToken } from '../../token/index.js'
import { User } from '../../../graphql/__generated__/graphql.types.gen.js'
import constants from '../../../constants/constants.js'

export const login = async (email: string, password: string): Promise<User> => {
  const user = await UserModel.findOne({ email })

  if (user === null) {
    throw new Error(constants.GRAPHQL.MESSAGE.LOGIN_ERROR)
  }

  const isPassConfirm = await getPasswordConfirmation(password, user.password)

  if (!isPassConfirm) {
    throw new Error(constants.GRAPHQL.MESSAGE.LOGIN_ERROR)
  }

  const accessToken = await generateToken({
    ...user.toJSON(),
    id: user._id
  })

  return {
    ...user.toJSON(),
    accessToken
  }
}
