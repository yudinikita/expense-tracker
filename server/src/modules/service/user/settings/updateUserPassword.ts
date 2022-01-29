import bcrypt from 'bcrypt'
import pkg from 'mongoose'
import { UserModel } from '../../../models/index.js'
import { UserPasswordInput } from '../../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const updateUserPassword = async (id: string, userPasswordInput: UserPasswordInput): Promise<any> => {
  const userId = new Types.ObjectId(id)
  const nowPassword = userPasswordInput.nowPassword ?? ''
  const newPassword = userPasswordInput.newPassword ?? ''

  const user = await UserModel.findOne({ _id: userId })

  const isPassEquals = await bcrypt.compare(nowPassword, user?.password)
  if (!isPassEquals) return { success: false, message: 'Текущий пароль указан не верно' }

  const hashedNewPassword = await bcrypt.hash(newPassword, await bcrypt.genSalt(10))

  await UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { password: hashedNewPassword } }
  )

  return {
    success: true,
    message: 'Новый пароль сохранен'
  }
}
