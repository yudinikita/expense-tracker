import { HelpModel } from '../../models/index.js'
import { Help, HelpDetailInput, User } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const getHelpDetail = async (user: User, input: HelpDetailInput): Promise<Help | null> => {
  const id = toObjectId(input.id)

  const helpFetched = await HelpModel.findOne({ user: user.id, _id: id })

  if (helpFetched === null) return null

  return helpFetched.toJSON()
}
