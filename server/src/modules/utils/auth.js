import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { AuthenticationError, ForbiddenError } from 'apollo-server-fastify'

const SALT_ROUNDS = 10

const ACTIVATION_CODE_LENGTH = process.env.ACTIVATION_CODE_LENGTH || 3
const RANDOM_NUMBER_MIN = 100
const RANDOM_NUMBER_MAX = 1000000

export const getHashedPassword = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS)
}

export const getPasswordConfirmation = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

export const getActivationCode = async () => {
  const randomNum = await new Promise((resolve, reject) => {
    crypto.randomInt(RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX, (err, number) => {
      if (err) reject(err)
      resolve(number)
    })
  })

  return randomNum.toString().padStart(ACTIVATION_CODE_LENGTH, '0').substring(0, ACTIVATION_CODE_LENGTH)
}

export const withAuth = (next) => (
  root,
  args,
  context,
  info,
) => {
  if (!context.user) {
    throw new AuthenticationError('Ошибка авторизации')
  }

  if (!context.user.isActivated) {
    throw new ForbiddenError('Аккаунт не активирован')
  }

  return next(root, args, context, info)
}
