import { useSettings } from '../../../hooks'
import { COLOR } from '../constants'

const defaultOptionsAmount = {
  style: 'currency',
  currency: 'RUB',
  currencyDisplay: 'symbol',
  useGrouping: true,
  maximumFractionDigits: 0,
}

const getPrefix = (amount) => {
  if (amount > 0) return '🠕'
  if (amount < 0) return '🠗'
  return null
}

const getColor = (amount) => {
  if (amount > 0) return COLOR.POSITIVE
  if (amount < 0) return COLOR.NEGATIVE
}

const getFormatter = (locales, defaultOptionsAmount, userSettingsCurrency, signDisplay) => {
  return new Intl.NumberFormat(locales, {
    ...defaultOptionsAmount,
    currency: userSettingsCurrency,
    signDisplay
  })
}

export const usePrice = (amount, signDisplay, haveColor) => {
  const { settings } = useSettings()
  const userSettingsCurrency = settings?.currency || 'RUB'
  const locales = settings?.language || 'ru'

  const formatter = getFormatter(locales, defaultOptionsAmount, userSettingsCurrency, signDisplay)
  const formatAmount = formatter.format(amount)

  const prefix = getPrefix(amount)
  const color = getColor(amount)

  const defaultStyles = {
    color: haveColor ? color : null
  }

  return {
    formatAmount,
    defaultStyles,
    prefix
  }
}
