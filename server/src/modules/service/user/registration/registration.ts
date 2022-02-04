import { UserModel } from '../../../models/index.js'
import { getActivationCode, getHashedPassword } from '../../../utils/auth/index.js'
import { sendActivationMail } from '../../mail/index.js'
import { generateToken } from '../../token/index.js'
import { createDefaultCategories } from '../../category/index.js'
import { User } from '../../../graphql/__generated__/graphql.types.gen.js'
import constants from '../../../constants/constants.js'

export const registration = async (email: string, password: string): Promise<User> => {
  const candidate: User | null = await UserModel.findOne({ email })

  if (candidate != null) {
    throw new Error(constants.GRAPHQL.MESSAGE.USER_EXISTS)
  }

  const hashedPassword = await getHashedPassword(password)

  const activationCode = await getActivationCode()

  const user: User = await UserModel.create({
    email,
    password: hashedPassword,
    activationCode
  })

  if (process.env['NODE_ENV'] === 'production') {
    await sendActivationMail(email, activationCode)
  }

  const accessToken = await generateToken({ ...user })

  await createDefaultCategories(user.id)

  return {
    id: user.id,
    email: user.email,
    isActivated: user.isActivated,
    settings: user.settings,
    accessToken
  }
}
