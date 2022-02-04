import pkg from 'mongoose'
import { UserModel } from '../../../models/index.js'
import { generateToken } from '../../token/index.js'
import { User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { AuthenticationError } from 'apollo-server-fastify'
import constants from '../../../constants/constants.js'

const { Types } = pkg

export const activate = async (id: string, activationCode: string): Promise<User> => {
  const userId = new Types.ObjectId(id)
  const user: any = await UserModel.findOne({ _id: userId })

  if (user === null) throw new AuthenticationError(constants.GRAPHQL.MESSAGE.AUTH_ERROR)

  if (user.activationCode !== activationCode) {
    throw new Error(constants.GRAPHQL.MESSAGE.ACTIVATION_CODE_ERROR)
  }

  user.isActivated = true

  await user.save()

  const accessToken = await generateToken({ ...user })

  return {
    id: user.id,
    email: user.email,
    isActivated: user.isActivated,
    settings: user.settings,
    accessToken
  }
}
