import { UserModel } from '../../../models/index.js'
import { SettingsInput } from '../../../graphql/__generated__/graphql.types.gen.js'
import pkg from 'mongoose'

const { Types } = pkg

export const updateUserSettings = async (id: string, settings?: SettingsInput): Promise<any> => {
  const userId = new Types.ObjectId(id)
  const user = await UserModel.findOneAndUpdate(
    { _id: userId },
    { $set: { settings } },
    { returnOriginal: false }
  )
  return user?.settings ?? {}
}
