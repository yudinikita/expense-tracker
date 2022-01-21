import { FastifyServerOptions } from 'fastify'

export const fastifyOptions: FastifyServerOptions = {
  logger: {
    prettyPrint: {
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname,reqId,responseTime,req,res',
      messageFormat: '{msg} {reqId} {req.method} {req.url} {res.statusCode}'
    }
  }
}
