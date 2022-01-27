import pkg from 'mongoose'
import { UserModel } from '../../../models/index.js'
import { generateToken } from '../../token/index.js'

const { Types } = pkg

export const activate = async (id: string, activationCode: string): Promise<any> => {
  const userId = new Types.ObjectId(id)
  const user: any = await UserModel.findOne({ _id: userId })

  if (user === null) throw new Error('Ошибка авторизации')

  if (user.activationCode !== activationCode) {
    throw new Error('Некорректный код активации')
  }

  user.isActivated = true

  await user.save()

  const accessToken = await generateToken({ ...user })

  return { accessToken, user }
}
