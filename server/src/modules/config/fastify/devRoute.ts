import { RouteHandler, RouteOptions } from 'fastify'

const handler: RouteHandler = async (
  _request,
  reply
) => await reply.send({ data: 'Server ready...' })

export const devRoute: RouteOptions = {
  method: 'GET',
  url: '*',
  handler
}
