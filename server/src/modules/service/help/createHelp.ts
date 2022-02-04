import { HelpModel } from '../../models/index.js'
import { CreateHelpInput, Help, User } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const createHelp = async (user: User, input: CreateHelpInput): Promise<Help> => {
  const newHelp = new HelpModel({ ...input, user: toObjectId(user.id) })

  await newHelp.save()

  return newHelp.toJSON()
}
