import pkg from 'mongoose'

const { model, Schema, Types } = pkg

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

export default model('Category', CategorySchema)
