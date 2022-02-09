import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify'

const _dirname = dirname(fileURLToPath(import.meta.url))

const STATIC_CONFIG = {
  PATHS: {
    CLIENT: 'client',
    BUILD: 'build',
    FILE_NAME: 'index.html'
  },
  PREFIX: '/',
  ROUTE: {
    URL: '*'
  }
}

const root = path.join(_dirname, '..', '..', '..', '..', '..', STATIC_CONFIG.PATHS.CLIENT, STATIC_CONFIG.PATHS.BUILD)

export const staticOptions = {
  root,
  prefix: STATIC_CONFIG.PREFIX
}

async function handler (_request: FastifyRequest, reply: FastifyReply): Promise<void> {
  await reply.sendFile(STATIC_CONFIG.PATHS.FILE_NAME)
}

export const staticRoute: RouteOptions = {
  method: 'GET',
  url: STATIC_CONFIG.ROUTE.URL,
  handler
}
