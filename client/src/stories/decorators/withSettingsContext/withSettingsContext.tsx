import React, { useState } from 'react'
import { SettingsContext } from 'modules/context'
import { defaultSettings } from 'modules/context/settings/defaultSettings'
import { Settings } from 'modules/graphql'

interface Props {
  settings?: Settings
}

const SettingsProvider: React.FC<Props> = ({
  settings,
  children
}) => {
  const state = settings || defaultSettings
  const [currentSettings, setCurrentSettings] = useState<Settings>(state)

  const saveSettings = (values: Settings) => {
    const newSettings: Settings = {
      ...settings,
      ...values
    }

    console.log('New Settings:', newSettings)

    setCurrentSettings(newSettings)

    return newSettings
  }

  return (
    <SettingsContext.Provider value={{ settings: currentSettings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export const withSettingsContext = (storyFn: Function) => {
  return (
    <SettingsProvider>
      {storyFn()}
    </SettingsProvider>
  )
}
