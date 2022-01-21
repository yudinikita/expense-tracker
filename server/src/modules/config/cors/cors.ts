import { FastifyCorsOptions } from 'fastify-cors'
import { origin } from './origin.js'

export const corsOptions: FastifyCorsOptions = {
  origin,
  credentials: true
}
