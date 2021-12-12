const HelpModel = require('../models/Help')
const TransactionModel = require('../models/Transactions')

class HelpService {

  async getHelps (user) {
    const helpFetched = await HelpModel.find({ user }).sort({ createdAt: -1 })

    return await helpFetched.map(helpItem => {
      const createdAt = new Date(helpItem._doc.createdAt).toISOString()
      const updatedAt = new Date(helpItem._doc.updatedAt).toISOString()

      return {
        ...helpItem._doc,
        id: helpItem._doc._id,
        createdAt,
        updatedAt,
      }
    })
  }

  async getHelpDetail (user, helpId) {
    const helpFetched = await HelpModel.findOne({ user, _id: helpId })

    const createdAt = new Date(helpFetched._doc.createdAt).toISOString()
    const updatedAt = new Date(helpFetched._doc.updatedAt).toISOString()

    return {
      ...helpFetched._doc,
      id: helpFetched._doc._id,
      createdAt,
      updatedAt,
    }
  }

  async createHelp (user, help) {
    const newHelp = new HelpModel({ user, ...help })

    await newHelp.save()

    return newHelp
  }

  async updateHelp (helpUpdate) {
    return HelpModel.findOneAndUpdate(
      { _id: helpUpdate?.id },
      { $set: { solved: helpUpdate?.solved } }
    )
  }

}

module.exports = new HelpService()
