import React, { ChangeEventHandler } from 'react'
import { useSettings } from '../../../../../hooks'
import { languages } from '../../../../../data'
import { useTranslation } from 'react-i18next'

export const SettingsLanguage = () => {
  const { t } = useTranslation()
  const { settings, saveSettings } = useSettings()

  const changeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    saveSettings({ ...settings, language: e.target.value })
    window.sessionStorage.removeItem('homePhrases')
  }

  return (
    <div>
      <div className='groupInput'>
        <select
          className='mainInput'
          id='languages'
          onChange={changeHandler}
          defaultValue={settings?.language}
        >
          {languages.map(language => (
            <option
              key={language?.id}
              value={language?.language}
            >
              {language?.name}
            </option>
          ))}
        </select>
        <label
          className='mainInput__label'
          htmlFor='languages'
        >
          {t('settings.language.title')}
        </label>
      </div>
    </div>
  )
}
