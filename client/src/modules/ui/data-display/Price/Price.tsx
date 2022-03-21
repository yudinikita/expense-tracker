import React from 'react'
import classNames from 'classnames'
import Dinero from 'dinero.js'
import { Icon, Space, Typography } from 'modules/ui'
import { DownSmallOutline, UpSmallOutline } from 'modules/assets/icons'
import s from './Price.module.scss'
import { useSettings } from 'modules/hooks'
import getSymbolFromCurrency from 'currency-symbol-map'

interface PriceProps {
  /**
   * Expressed in minor currency units, as an integer.
   *
   * @default 0
   */
  amount?: number
  /**
   * Expressed as an [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217#Active_codes).
   *
   * @default 'RUB'
   */
  currency?: Dinero.Currency
  /**
   * An optional locale property that affects how output strings are formatted.
   *
   * @default 'ru'
   */
  locale?: string
  /**
   * An optional prefix property indicate a positive or negative amount.
   */
  havePrefix?: boolean
  /**
   * An optional color property indicate colors a positive or negative amount.
   */
  haveColor?: boolean
  /**
   * An optional property show minus for amount.
   */
  haveMinus?: boolean
  className?: string
  style?: React.CSSProperties
}

/**
 * A price is an immutable data structure representing a specific monetary value
 */
export const Price: React.FC<PriceProps> = ({
  amount = 0,
  currency,
  locale = 'ru',
  havePrefix = false,
  haveColor = false,
  haveMinus = true,
  className,
  style
}) => {
  const { settings } = useSettings()

  const customCurrency = currency ? currency : settings?.currency as Dinero.Currency ?? Dinero.defaultCurrency

  const formattedAmount = haveMinus ? amount : Math.abs(amount)

  const price = Dinero({
    amount: formattedAmount,
    currency: customCurrency,
    precision: 0
  }).setLocale(locale)

  const customStyle = { ...style }

  const color = haveColor
    ? {
      [s.positive]: amount > 0,
      [s.negative]: amount < 0,
    }
    : null

  const props = {
    className: classNames(s.base, color, className),
    style: { ...customStyle }
  }

  const priceType = getTypePrice(amount)

  const symbolCurrency = getSymbolFromCurrency(price.getCurrency()) ?? '$'

  return (
    <Space
      direction='horizontal'
      align='center'
      size={5}
    >
      {renderPrefix(priceType, havePrefix)}
      <Typography variant='text'{...props}>
        {price.toFormat('0,0')} {symbolCurrency}
      </Typography>
    </Space>
  )
}

type PriceType = 'positive' | 'negative' | 'zero'

const getTypePrice = (amount: number): PriceType => {
  const price = Dinero({ amount })
  if (price.isPositive() && !price.isZero()) return 'positive'
  if (price.isNegative()) return 'negative'
  return 'zero'
}

const renderPrefix = (priceType: PriceType, have: boolean) => {
  if (!have) return null

  switch (priceType) {
    case 'positive':
      return <Icon icon={UpSmallOutline} iconSize={20} className={s.iconPositive} />
    case 'negative':
      return <Icon icon={DownSmallOutline} iconSize={20} className={s.iconNegative} />
    case 'zero':
      return null
  }
}
