import dotenv from 'dotenv'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const initConfig = async () => {
  const NODE_ENV = process.env['NODE_ENV'] || ''

  const __dirname = dirname(fileURLToPath(import.meta.url))

  dotenv.config()

  let pathConfig: string

  switch (NODE_ENV) {
    case 'production':
      pathConfig = path.join(__dirname, '../../../.env.production')
      break
    case 'development':
    default:
      pathConfig = path.join(__dirname, '../../../.env.development')
      break
  }

  return dotenv.config({ path: pathConfig })
}

export default initConfig
