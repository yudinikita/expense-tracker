import { UserModel } from '../../../models/index.js'
import { getActivationCode, getHashedPassword } from '../../../utils/auth/index.js'
import { sendActivationMail } from '../../mail/index.js'
import { generateToken } from '../../token/index.js'
import { createDefaultCategories } from '../../category/index.js'
import { User } from '../../../graphql/__generated__/graphql.types.gen.js'

export const registration = async (email: string, password: string): Promise<any> => {
  const candidate: User | null = await UserModel.findOne({ email })

  if (candidate != null) {
    throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
  }

  const hashedPassword = await getHashedPassword(password)

  const activationCode = await getActivationCode()

  const user: User = await UserModel.create({
    email,
    password: hashedPassword,
    activationCode
  })

  await sendActivationMail(email, activationCode)

  const accessToken = await generateToken({ ...user })

  await createDefaultCategories(user.id)

  return { ...user, accessToken }
}
