import dotenv, { DotenvConfigOutput } from 'dotenv'
import { getPathConfig } from './getPathConfig.js'

export const initConfig = async (): Promise<DotenvConfigOutput> => {
  const path = getPathConfig()
  return dotenv.config({ path })
}
