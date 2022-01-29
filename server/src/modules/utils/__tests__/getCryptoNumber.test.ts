import getCryptoNumber from '../getCryptoNumber.js'

describe('Utils - crypto number:', () => {

  it('should return typeof number', () => {
    const randomNum = getCryptoNumber(5, 10)

    expect(randomNum).toBeDefined()
    expect(typeof randomNum).toBe('number')
    expect(randomNum).toBeGreaterThanOrEqual(5)
    expect(randomNum).toBeLessThanOrEqual(10)
  })

})
