import pkg from 'mongoose'

const { model, Schema, Types } = pkg

const TransactionSchema = new Schema({
  amount: {
    type: Number,
    required: [true, 'Пожалуйста, введите число не равное нулю'],
  },
  category: {
    type: Types.ObjectId,
    ref: 'Category',
    required: [true, 'Пожалуйста, укажите категорию'],
  },
  commentary: {
    type: String,
    trim: true,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  }
})

export default model('Transaction', TransactionSchema)
