import { UserModel } from '../../../models/index.js'
import { getPasswordConfirmation } from '../../../utils/auth/index.js'
import { generateToken } from '../../token/index.js'
import { UserLoginInput } from '../../../graphql/__generated__/graphql.types.gen.js'

export const login = async (email: string, password: string): Promise<any> => {
  const user: UserLoginInput | null = await UserModel.findOne({ email })

  if (user === null) {
    throw new Error(`Пользователь с почтовым адресом ${email} не найден`)
  }

  const isPassConfirm = await getPasswordConfirmation(password, user.password)
  if (!isPassConfirm) {
    throw new Error('Неверный пароль')
  }

  const accessToken = await generateToken({ ...user })

  return { accessToken, user }
}
