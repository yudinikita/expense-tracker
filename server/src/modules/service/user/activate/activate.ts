import pkg, { HydratedDocument } from 'mongoose'
import { UserModel } from '../../../models/index.js'
import { generateToken } from '../../token/index.js'
import { User, UserActivationResponse } from '../../../graphql/__generated__/graphql.types.gen.js'
import constants from '../../../constants/constants.js'

const { Types } = pkg

export const activate = async (id: string, activationCode: string): Promise<UserActivationResponse> => {
  const userId = new Types.ObjectId(id)
  const user: HydratedDocument<User> = await UserModel.findOne({ _id: userId })

  if (!user) return {
    code: '400',
    success: false,
    message: constants.GRAPHQL.MESSAGE.AUTH_ERROR
  }

  if (user?.activationCode !== activationCode) return {
    code: '400',
    success: false,
    message: constants.GRAPHQL.MESSAGE.ACTIVATION_CODE_ERROR
  }

  user.isActivated = true

  await user.save()

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
