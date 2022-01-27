import bcrypt from 'bcrypt'
import constants from '../../constants/constants.js'

const SALT_ROUNDS = constants.AUTH.SALT_ROUNDS

export const getHashedPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS)
}
