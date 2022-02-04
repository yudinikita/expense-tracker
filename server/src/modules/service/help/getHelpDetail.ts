import pkg from 'mongoose'
import { HelpModel } from '../../models/index.js'
import { Help, HelpDetailInput, User } from '../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const getHelpDetail = async (user: User, input: HelpDetailInput): Promise<Help | null> => {
  const id = new Types.ObjectId(input.id)

  const helpFetched = await HelpModel.findOne({ user: user.id, _id: id })

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
