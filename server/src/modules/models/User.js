const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActivated: {
    type: Boolean,
    default: false
  },
  activationCode: {
    type: String
  },
  settings: {
    theme: {
      type: String,
      default: 'light'
    },
    language: {
      type: String,
      default: 'ru'
    },
    currency: {
      type: String,
      default: 'RUB'
    }
  }
}, { timestamps: true })

module.exports = model('User', UserSchema)
