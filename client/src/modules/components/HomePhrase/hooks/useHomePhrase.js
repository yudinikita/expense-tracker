import { getRandomItems } from '../../../utils'
import { homePhrases } from '../../../data'

export const useHomePhrase = () => {
  const getPhrase = () => {
    const sessionPhrase = sessionStorage.getItem('homePhrases')
    if (sessionPhrase) return sessionPhrase
    const randomPhrase = getRandomItems(homePhrases)
    sessionStorage.setItem('homePhrases', randomPhrase)
    return randomPhrase
  }

  const phrase = getPhrase()

  return { phrase }
}
