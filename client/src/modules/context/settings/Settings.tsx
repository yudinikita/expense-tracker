import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useTranslation } from 'react-i18next'
import { Settings, useUpdateUserSettingsMutation, useUserSettingsQuery } from 'modules/graphql'
import { SettingsContext } from './SettingsContext'
import { applyUserSettings } from './utils'
import { defaultSettings } from './defaultSettings'

interface Props {
  settings?: Settings
}

export const SettingsProvider: React.FC<Props> = ({ settings }) => {
  const { t } = useTranslation()
  const alert = useAlert()

  const state = settings || defaultSettings
  const [currentSettings, setCurrentSettings] = useState<Settings>(state)

  const { data, loading, error } = useUserSettingsQuery()
  const [updateUserSettings] = useUpdateUserSettingsMutation()

  useEffect(() => {
    if (!loading && !error) {
      const userSettings = data?.userSettings ?? {} as Settings

      const newSettings: Settings = {
        ...currentSettings,
        ...userSettings
      }

      setCurrentSettings(newSettings)
      applyUserSettings(newSettings)
    }
  }, [data?.userSettings, loading, error])

  const saveSettings = async (values: Settings) => {
    const newSettings: Settings = {
      ...settings,
      ...values
    }

    try {
      await updateUserSettings({
        variables: {
          input: {
            theme: newSettings?.theme ?? defaultSettings.theme,
            language: newSettings?.language ?? defaultSettings.language,
            currency: newSettings?.currency ?? defaultSettings.currency
          }
        }
      })

      setCurrentSettings(newSettings)
      applyUserSettings(newSettings)

      alert.success(t('alert.settings.save.success'))
    } catch {
      alert.error(t('alert.failed'))
    }
  }

  return (
    <SettingsContext.Provider value={{ settings: currentSettings, saveSettings }}>
      <Outlet />
    </SettingsContext.Provider>
  )
}
