import React from 'react'
import { useSettings } from '../../../../../hooks'
import { currencies } from '../../../../../data'

export const SettingsCurrency = () => {
  const { settings, saveSettings } = useSettings()

  const changeHandler = (e) => {
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
              key={currency?.id}
              value={currency?.title}
            >
              {currency?.name} ({currency?.symbol})
            </option>
          ))}
        </select>
        <label
          className='mainInput__label'
          htmlFor='currencies'
        >
          Валюта
        </label>
      </div>
    </div>
  )
}
