import pkg from 'mongoose'

const { model, Schema, Types } = pkg

const CategorySchema = new Schema<any>({
  title: {
    type: String,
    trim: true,
    maxLength: 256,
    required: [true, 'Пожалуйста, введите название категории']
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

export const CategoryModel = model<any>('Category', CategorySchema)
