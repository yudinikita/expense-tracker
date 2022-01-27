import pkg from 'mongoose'
import { HelpModel } from '../../models/index.js'
import { HelpInput, User } from '../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const createHelp = async (user: User, help?: HelpInput): Promise<any> => {
  const userId = new Types.ObjectId(user.id)

  const newHelp = new HelpModel({ ...help, user: userId })

  await newHelp.save()

  return newHelp
}
