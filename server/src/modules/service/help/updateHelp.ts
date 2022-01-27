import { HelpModel } from '../../models/index.js'
import { HelpUpdate } from '../../graphql/__generated__/graphql.types.gen.js'

export const updateHelp = async (helpUpdate: HelpUpdate): Promise<any> => {
  return await HelpModel.findOneAndUpdate(
    { _id: helpUpdate.id },
    { $set: { solved: helpUpdate.solved } }
  )
}
