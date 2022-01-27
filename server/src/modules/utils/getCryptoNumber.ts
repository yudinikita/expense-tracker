import crypto from 'crypto'

const getCryptoNumber = async (min: number, max: number): Promise<number> => {
  return await new Promise((resolve, reject) => {
    crypto.randomInt(min, max, (err, number) => {
      if (err != null) reject(err)
      resolve(number)
    })
  })
}

export default getCryptoNumber
