import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const CLIENT = 'client'
const BUILD = 'build'
const FILE_NAME = 'index.html'

const __dirname = dirname(fileURLToPath(import.meta.url))

const pathStatic = path.join(__dirname, CLIENT, BUILD)

const staticOptions = {
  root: path.join(pathStatic, FILE_NAME),
  prefix: '/'
}

export const staticRoute = {
  method: 'GET',
  url: '*',
  handler: (request, reply) => reply.sendFile(FILE_NAME, pathStatic)
}

export default staticOptions
