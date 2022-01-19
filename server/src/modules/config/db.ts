import mongoose from 'mongoose'

const connectDB = async (app: any) => {
  const MONGO_URI = process.env.MONGO_URI || ''

  try {
    mongoose.connection.on('connected', () => {
      app.log.info({actor: 'MongoDB'}, 'connected')
    })

    mongoose.connection.on('disconnected', () => {
      app.log.error({actor: 'MongoDB'}, 'disconnected')
    })

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error: any) {
    app.log.error({actor: 'MongoDB'}, 'error')
    app.log.error({actor: 'MongoDB'}, error?.message)
    process.exit(1)
  }
}

export default connectDB
