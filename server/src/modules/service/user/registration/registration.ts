import { HydratedDocument } from 'mongoose'
import { UserModel } from '../../../models/index.js'
import { getActivationCode, getHashedPassword } from '../../../utils/auth/index.js'
import { sendActivationMail } from '../../mail/index.js'
import { generateToken } from '../../token/index.js'
import { createDefaultCategories } from '../../category/index.js'
import { User, UserRegistrationResponse } from '../../../graphql/__generated__/graphql.types.gen.js'
import constants from '../../../constants/constants.js'

export const registration = async (email: string, password: string, language: string): Promise<UserRegistrationResponse> => {
  const candidate: HydratedDocument<User> | undefined = await UserModel.findOne({ email })

  if (candidate) {
    return {
      code: '400',
      success: false,
      message: constants.GRAPHQL.MESSAGE.USER_EXISTS
    }
  }

  const hashedPassword = await getHashedPassword(password)

  const activationCode = await getActivationCode()

  const user: HydratedDocument<User> = await UserModel.create({
    email,
    password: hashedPassword,
    activationCode,
    settings: {
      language
    }
  })

  if (process.env['NODE_ENV'] === 'production') {
    await sendActivationMail(email, activationCode)
  } else {
    console.log('ACTIVATION CODE:', activationCode)
  }

  const accessToken = await generateToken({
    ...user.toJSON(),
    id: user._id
  })

  await createDefaultCategories(user.id, language)

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
