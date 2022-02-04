import { HelpModel } from '../../models/index.js'
import { Help, User } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const getHelps = async (user: User): Promise<Help[]> => {
  const userId = toObjectId(user.id)
  return await HelpModel.find({ user: userId }).sort({ createdAt: -1 })
}
