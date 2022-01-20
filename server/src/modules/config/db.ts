import colors from 'ansi-colors'
import mongoose from 'mongoose'

const NameDB: string = colors.magenta('[MongoDB] ')

const connectDB = async (app: any): Promise<void> => {
  const MONGO_URI: string = process.env['MONGO_URI'] || ''

  try {
    mongoose.connection.on('connected', () => {
      app.log.info(NameDB + colors.green('connected ✔'))
    })

    mongoose.connection.on('disconnected', () => {
      app.log.error(NameDB + colors.red('disconnected ✘'))
    })

    await mongoose.connect(MONGO_URI)
  } catch (error: any) {
    app.log.error(NameDB + 'error')
    app.log.error(NameDB, error?.message)
    process.exit(1)
  }
}

export default connectDB
