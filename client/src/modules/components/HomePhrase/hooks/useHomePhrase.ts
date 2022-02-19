import { getRandomInt } from '../../../utils'
import { useTranslation } from 'react-i18next'

const COUNT_PHRASES = 18

export const useHomePhrase = () => {
  const { t } = useTranslation()

  const getPhrase = () => {
    const sessionPhrase = window.sessionStorage.getItem('homePhrases')

    if (sessionPhrase) {
      return sessionPhrase
    }

    const randomNum = getRandomInt(COUNT_PHRASES)

    const randomPhrase = t(`home.phrases.${randomNum}`)

    window.sessionStorage.setItem('homePhrases', randomPhrase)

    return randomPhrase
  }

  const phrase = getPhrase()

  return { phrase }
}
