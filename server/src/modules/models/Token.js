import { Schema, model, Types } from 'mongoose'

const TokenSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: 'User'
  },
  refreshToken: {
    type: String,
    required: true
  }
})

export default model('Token', TokenSchema)
