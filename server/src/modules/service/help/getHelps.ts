import { HelpModel } from '../../models/index.js'
import { User } from '../../graphql/__generated__/graphql.types.gen.js'
import pkg from 'mongoose'

const { Types } = pkg

export const getHelps = async (user: User): Promise<any> => {
  const userId = new Types.ObjectId(user.id)
  const helpFetched = await HelpModel.find({ user: userId }).sort({ createdAt: -1 })

  return helpFetched.map(helpItem => {
    const createdAt = new Date(helpItem.createdAt).toISOString()
    const updatedAt = new Date(helpItem.updatedAt).toISOString()

    return {
      ...helpItem.toJSON(),
      id: helpItem._id,
      createdAt,
      updatedAt
    }
  })
}
