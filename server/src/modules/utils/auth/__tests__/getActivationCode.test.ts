import { getActivationCode } from '../getActivationCode.js'
import constants from '../../../constants/constants.js'

describe('Utils/auth - activation code:', () => {

  let result: string

  beforeEach(async () => {
    result = await getActivationCode()
  })

  it('should return typeof string', async () => {
    expect(typeof result).toBe('string')
  })

  it('should return length equal constant', async () => {
    const ACTIVATION_CODE_LENGTH = constants.AUTH.ACTIVATION_CODE.LENGTH
    expect(result.length).toBe(ACTIVATION_CODE_LENGTH)
  })

})
