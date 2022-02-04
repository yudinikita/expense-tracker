import { UserModel } from '../../../models/index.js'
import { Settings } from '../../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../../utils/index.js'

export const getUserSettings = async (userId: string): Promise<Settings> => {
  const user = await UserModel.findOne({ _id: toObjectId(userId) })
  return user?.settings.toJSON() ?? {}
}
