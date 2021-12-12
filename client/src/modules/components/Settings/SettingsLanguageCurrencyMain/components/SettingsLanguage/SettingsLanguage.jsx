import React from 'react'
import { useSettings } from '../../../../../hooks'
import { languages } from '../../../../../data'

export const SettingsLanguage = () => {
  const { settings, saveSettings } = useSettings()

  const changeHandler = (e) => {
    saveSettings({ ...settings, language: e.target.value })
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
          Язык
        </label>
      </div>
    </div>
  )
}
