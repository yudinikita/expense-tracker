import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useGetUserSettings, useSetUpdateUserSettings } from '../hooks'
import { Settings } from '../graphql/models/models.gen.js'

interface SettingsContextInterface {
  settings: Settings,
  saveSettings: Function
}

export const SettingsContext = React.createContext<SettingsContextInterface | null>(null)

type Props = {
  settings?: Settings
}

const defaultSettings: Settings = {
  theme: 'dark',
  language: 'ru',
  currency: 'RUB'
}

export const SettingsProvider = ({ settings }: Props) => {
  const state = settings || defaultSettings
  const [currentSettings, setCurrentSettings] = useState<Settings>(state)
  const alert = useAlert()

  const { userSettings, loading, error } = useGetUserSettings()
  const { setUpdateUserSettings } = useSetUpdateUserSettings()

  useEffect(() => {
    if (!loading && !error) {
      setCurrentSettings({
        ...currentSettings,
        ...userSettings
      })

      const userTheme = userSettings?.theme || 'light'
      document.documentElement.setAttribute('data-theme', userTheme)
    }
  }, [userSettings, loading, error])

  const saveSettings = async (values: Settings) => {
    const newSettings = {
      ...settings,
      ...values
    }

    try {
      await setUpdateUserSettings({
        variables: {
          input: {
            theme: newSettings?.theme || 'light',
            language: newSettings?.language || 'ru',
            currency: newSettings?.currency || 'RUB'
          }
        }
      })

      setCurrentSettings(newSettings)

      const userTheme = newSettings?.theme || 'light'
      document.documentElement.setAttribute('data-theme', userTheme)

      alert.success('Настройки сохранены')
    } catch {
      alert.error('Не удалось сохранить настройки')
    }
  }

  return (
    <SettingsContext.Provider value={{ settings: currentSettings, saveSettings }}>
      <Outlet />
    </SettingsContext.Provider>
  )
}

SettingsProvider.propTypes = {
  settings: PropTypes.object
}
