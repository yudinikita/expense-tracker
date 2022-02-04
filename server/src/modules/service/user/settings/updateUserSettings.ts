import { UserModel } from '../../../models/index.js'
import { Settings, SettingsInput } from '../../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../../utils/index.js'

export const updateUserSettings = async (userId: string, settings: SettingsInput): Promise<Settings> => {
  const user = await UserModel.findByIdAndUpdate(
    toObjectId(userId),
    { $set: { settings } },
    { returnDocument: 'after' }
  )
  return user?.settings.toJSON()
}
