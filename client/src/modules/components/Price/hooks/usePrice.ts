import { useSettings } from '../../../hooks'
import { COLOR } from '../constants'

const defaultOptionsAmount = {
  style: 'currency',
  currency: 'RUB',
  currencyDisplay: 'symbol',
  useGrouping: true,
  maximumFractionDigits: 0
}

const getPrefix = (amount: number): string | null => {
  if (amount > 0) return '🠕'
  if (amount < 0) return '🠗'
  return null
}

const getColor = (amount: number): string => {
  if (amount > 0) return COLOR.POSITIVE
  if (amount < 0) return COLOR.NEGATIVE
  return ''
}

const getFormatter = (locales: string, defaultOptionsAmount: object, userSettingsCurrency: string, signDisplay: any) => {
  return new Intl.NumberFormat(locales, {
    ...defaultOptionsAmount,
    currency: userSettingsCurrency,
    signDisplay
  })
}

export const usePrice = (amount: number, signDisplay: string, haveColor: boolean) => {
  const { settings } = useSettings()
  const userSettingsCurrency = settings?.currency || 'RUB'
  const locales = 'ru'

  const formatter = getFormatter(locales, defaultOptionsAmount, userSettingsCurrency, signDisplay)
  const formatAmount = formatter.format(amount)

  const prefix = getPrefix(amount)
  const color = getColor(amount)

  const defaultStyles = {
    color: haveColor ? color : ''
  }

  return {
    formatAmount,
    defaultStyles,
    prefix
  }
}
