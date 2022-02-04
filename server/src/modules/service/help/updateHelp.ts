import { HelpModel } from '../../models/index.js'
import { Help, UpdateHelpInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const updateHelp = async (helpUpdate: UpdateHelpInput): Promise<Help> => {
  const updatedHelp = await HelpModel.findByIdAndUpdate(
    toObjectId(helpUpdate.id),
    { $set: { solved: helpUpdate.solved } },
    { returnDocument: 'after' }
  )

  return updatedHelp.toJSON()
}
