import colors from 'ansi-colors'
import mongoose from 'mongoose'
import { FastifyInstance } from 'fastify'

const NameDB = colors.magenta('[MongoDB] ')
const msgConnected = NameDB + colors.green('connected ✔')
const msgDisconnected = NameDB + colors.red('disconnected ✘')

export const connectDB = async (app: FastifyInstance): Promise<void> => {
  try {
    const MONGO_URI = process.env['MONGO_URI'] ?? ''

    mongoose.connection.on('connected', () => {
      app.log.info(msgConnected)
    })

    mongoose.connection.on('disconnected', () => {
      app.log.error(msgDisconnected)
    })

    await mongoose.connect(MONGO_URI)
  } catch (error: any) {
    app.log.error(NameDB, error?.message)
    process.exit(1)
  }
}
