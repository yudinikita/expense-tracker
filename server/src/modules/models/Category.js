const { Schema, model, Types } = require('mongoose')

const CategorySchema = new Schema({
  title: {
    type: String,
    trim: true,
    maxLength: 256,
    minlength: 1,
    required: [true, 'Пожалуйста, введите название категории']
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, { timestamps: true })

module.exports = model('Category', CategorySchema)
