import { UserModel } from '../../../models/index.js'
import { getPasswordConfirmation } from '../../../utils/auth/index.js'
import { generateToken } from '../../token/index.js'
import { User } from '../../../graphql/__generated__/graphql.types.gen.js'
import constants from '../../../constants/constants.js'

export const login = async (email: string, password: string): Promise<User> => {
  const user: User & { password: string } | null = await UserModel.findOne({ email })

  if (user === null) {
    throw new Error(constants.GRAPHQL.MESSAGE.LOGIN_ERROR)
  }

  const isPassConfirm = await getPasswordConfirmation(password, user.password)

  if (!isPassConfirm) {
    throw new Error(constants.GRAPHQL.MESSAGE.LOGIN_ERROR)
  }

  const userDto = {
    // @ts-expect-error
    ...user.toJSON(),
    // @ts-expect-error
    id: user._id
  }

  const accessToken = await generateToken({ ...userDto })

  return {
    id: user.id,
    email: user.email,
    isActivated: user.isActivated,
    settings: user.settings,
    accessToken
  }
}
