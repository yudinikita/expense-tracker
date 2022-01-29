import { UserModel } from '../../../models/index.js'
import pkg from 'mongoose'

const { Types } = pkg

export const getUserSettings = async (id: string): Promise<any> => {
  const userId = new Types.ObjectId(id)
  const user = await UserModel.findOne({ _id: userId })
  return user?.settings ?? {}
}
