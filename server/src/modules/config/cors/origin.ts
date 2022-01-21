import { OriginFunction } from 'fastify-cors'
import whitelist from './whitelist.js'

export const origin: OriginFunction = (origin, callback) => {
  if (whitelist.includes(origin)) {
    callback(null, true)
  } else {
    const error = new Error('Not allowed by CORS')
    callback(error, false)
  }
}
