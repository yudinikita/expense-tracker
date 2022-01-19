import dotenv from 'dotenv'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const NODE_ENV = process.env.NODE_ENV || ''

const initConfig = () => {
  dotenv.config()

  let pathConfig

  switch (NODE_ENV) {
    case 'production':
      pathConfig = path.join(__dirname, '../../../.env.production')
      break
    case 'development':
    default:
      pathConfig = path.join(__dirname, '../../../.env.development')
      break
  }

  const result = dotenv.config({ path: pathConfig })

  if (result.error != null) {
    throw result.error
  }

  return result
}

export default initConfig
