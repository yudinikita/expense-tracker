const { Schema, model, Types } = require('mongoose')

const HelpSchema = new Schema({
  title: {
    type: String,
    trim: true,
    maxLength: 256,
    minlength: 1,
    required: [true, 'Введите вопрос']
  },
  detail: {
    type: String,
    default: ''
  },
  answer: {
    type: String,
    default: ''
  },
  solved: {
    type: Boolean,
    default: null
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, { timestamps: true })

module.exports = model('Help', HelpSchema)
