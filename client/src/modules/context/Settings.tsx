import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { Settings, useUpdateUserSettingsMutation, useUserSettingsQuery } from '../graphql/__generated__/graphql.gen'

interface SettingsContextInterface {
  settings: Settings
  saveSettings: (settings: Settings) => void
}

export const SettingsContext = React.createContext<SettingsContextInterface>({} as SettingsContextInterface)

interface Props {
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

  const { data, loading, error } = useUserSettingsQuery()
  const [updateUserSettings] = useUpdateUserSettingsMutation()

  useEffect(() => {
    if (!loading && (error == null)) {
      setCurrentSettings({
        ...currentSettings,
        ...data?.userSettings
      })

      const userTheme = data?.userSettings?.theme || 'light'
      document.documentElement.setAttribute('data-theme', userTheme)
    }
  }, [data?.userSettings, loading, error])

  const saveSettings = async (values: Settings) => {
    const newSettings = {
      ...settings,
      ...values
    }

    try {
      await updateUserSettings({
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
