import { HelpModel } from '../../models/index.js'
import { Help, UpdateHelpInput } from '../../graphql/__generated__/graphql.types.gen.js'

export const updateHelp = async (helpUpdate: UpdateHelpInput): Promise<Help> => {
  const updatedHelp = await HelpModel.findByIdAndUpdate(
    helpUpdate.id,
    { $set: { solved: helpUpdate.solved } },
    { returnDocument: 'after' }
  )

  return {
    id: updatedHelp?._id,
    user: updatedHelp?.user,
    title: updatedHelp?.title,
    detail: updatedHelp?.detail,
    solved: updatedHelp?.solved,
    answer: updatedHelp?.answer,
    createdAt: updatedHelp?.createdAt,
    updatedAt: updatedHelp?.updatedAt
  }
}
