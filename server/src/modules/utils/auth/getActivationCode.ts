import constants from '../../constants/constants.js'
import getCryptoNumber from '../getCryptoNumber.js'

const ACTIVATION_CODE_LENGTH = constants.AUTH.ACTIVATION_CODE.LENGTH
const RANDOM_NUMBER_MIN = constants.AUTH.ACTIVATION_CODE.MIN
const RANDOM_NUMBER_MAX = constants.AUTH.ACTIVATION_CODE.MAX

const getFormattedCode = (num: number): string => {
  return num.toString().padStart(ACTIVATION_CODE_LENGTH, '0').substring(0, ACTIVATION_CODE_LENGTH)
}

export const getActivationCode = async (): Promise<string> => {
  const randomNum = await getCryptoNumber(RANDOM_NUMBER_MIN, RANDOM_NUMBER_MAX)
  return getFormattedCode(randomNum)
}
