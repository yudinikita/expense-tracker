import pkg from 'mongoose'
import { HelpModel } from '../../models/index.js'
import { User } from '../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const getHelpDetail = async (user: User, helpId: string): Promise<any> => {
  const id = new Types.ObjectId(helpId)

  const helpFetched = await HelpModel.findOne({ user, _id: id })

  if (helpFetched === null) return null

  const createdAt = new Date(helpFetched.createdAt).toISOString()
  const updatedAt = new Date(helpFetched.updatedAt).toISOString()

  return {
    ...helpFetched.toJSON(),
    id: helpFetched._id,
    createdAt,
    updatedAt
  }
}
