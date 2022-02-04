import pkg from 'mongoose'
import { HelpModel } from '../../models/index.js'
import { CreateHelpInput, User } from '../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const createHelp = async (user: User, input: CreateHelpInput): Promise<any> => {
  const userId = new Types.ObjectId(user.id)

  const newHelp = new HelpModel({ ...input, user: userId })

  await newHelp.save()

  return newHelp
}
