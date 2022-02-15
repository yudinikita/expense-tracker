import { getRandomItem } from '../../../utils'
import { homePhrases } from '../../../data'

export const useHomePhrase = () => {
  const getPhrase = () => {
    const sessionPhrase = window.sessionStorage.getItem('homePhrases')

    if (sessionPhrase) {
      return sessionPhrase
    }

    const randomPhrase = getRandomItem<string>(homePhrases)

    window.sessionStorage.setItem('homePhrases', randomPhrase)

    return randomPhrase
  }

  const phrase = getPhrase()

  return { phrase }
}
