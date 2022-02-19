import React, { ChangeEventHandler } from 'react'
import { useSettings } from '../../../../../hooks'
import { currencies } from '../../../../../data'
import { useTranslation } from 'react-i18next'

export const SettingsCurrency = () => {
  const { t } = useTranslation()
  const { settings, saveSettings } = useSettings()

  const changeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    saveSettings({ ...settings, currency: e.target.value })
  }

  return (
    <div>
      <div className='groupInput'>
        <select
          className='mainInput'
          name='currencies'
          id='currencies'
          onChange={changeHandler}
          defaultValue={settings?.currency}
        >
          {currencies.map(currency => (
            <option
              key={currency.id}
              value={currency.title}
            >
              {t(`currencies.name.${currency.id}`)} ({currency.symbol})
            </option>
          ))}
        </select>
        <label
          className='mainInput__label'
          htmlFor='currencies'
        >
          {t('settings.currency.title')}
        </label>
      </div>
    </div>
  )
}
