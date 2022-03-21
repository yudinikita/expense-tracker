import React, { ElementType } from 'react'
import { Button, Icon, Space } from 'modules/ui'
import { BelarusFlag, EuropeFlag, RussiaFlag, SouthKoreaFlag, UkraineFlag, USAFlag } from 'modules/assets/icons'
import { useSettings } from 'modules/hooks'
import { defaultSettings } from 'modules/context/settings/defaultSettings'
import { useTranslation } from 'react-i18next'

/**
 * List of currencies are continuous, vertical indexes of currency
 */
export const CurrenciesList: React.FC = () => {
  const { t } = useTranslation()
  const { settings, saveSettings } = useSettings()

  const handleChangeCurrency = (currencyCode: string) => {
    if (currencyCode) saveSettings({ ...settings, currency: currencyCode })
  }

  const currentCurrency = settings?.currency ?? defaultSettings.currency

  return (
    <Space direction='vertical'>
      {renderCurrencyItem(t(`currencies.RUB`), RussiaFlag, 'RUB', '₽',
        currentCurrency, handleChangeCurrency)}

      {renderCurrencyItem(t(`currencies.USD`), USAFlag, 'USD', '$',
        currentCurrency, handleChangeCurrency)}

      {renderCurrencyItem(t(`currencies.EUR`), EuropeFlag, 'EUR', '€',
        currentCurrency, handleChangeCurrency)}

      {renderCurrencyItem(t(`currencies.BYN`), BelarusFlag, 'BYN', 'Br',
        currentCurrency, handleChangeCurrency)}

      {renderCurrencyItem(t(`currencies.KRW`), SouthKoreaFlag, 'KRW', '₩',
        currentCurrency, handleChangeCurrency)}

      {renderCurrencyItem(t(`currencies.UAH`), UkraineFlag, 'UAH', '₴',
        currentCurrency, handleChangeCurrency)}
    </Space>
  )
}

const renderCurrencyItem = (
  title: string,
  icon: string | ElementType,
  currencyCode: string,
  symbol: string,
  currentCurrency: string,
  handleChangeCurrency: (currencyCode: string) => void
) => {
  const iconCountry = <Icon icon={icon} iconSize={40} style={{ borderRadius: '50%' }} />

  const isActive = currentCurrency === currencyCode
  const buttonVariant = isActive ? 'primary' : 'default'

  const after = <span style={{ color: 'var(--color-gray-5)' }}>{symbol}</span>

  return (
    <Button
      variant={buttonVariant}
      size='small'
      textAlign='left'
      before={iconCountry}
      after={after}
      onClick={() => handleChangeCurrency(currencyCode)}
    >
      {title}
    </Button>
  )
}
