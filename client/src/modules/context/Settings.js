import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useGetUserSettings, useSetUpdateUserSettings } from '../hooks'

export const SettingsContext = React.createContext(null)

const defaultSettings = {
  language: 'ru',
  currency: 'RUB'
}

export const SettingsProvider = ({ settings }) => {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings
  )
  const alert = useAlert()

  const { userSettings, loading, error } = useGetUserSettings()
  const { setUpdateUserSettings } = useSetUpdateUserSettings()

  useEffect(() => {
    if (!loading && !error) {
      setCurrentSettings({
        ...currentSettings,
        ...userSettings
      })
    }
  }, [userSettings, loading, error])

  const saveSettings = async (values) => {
    const newSettings = {
      ...settings,
      ...values
    }
    setCurrentSettings(newSettings)
    try {
      await setUpdateUserSettings({
        variables: {
          settings: {
            language: newSettings?.language || '',
            currency: newSettings?.currency || ''
          }
        }
      })
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
