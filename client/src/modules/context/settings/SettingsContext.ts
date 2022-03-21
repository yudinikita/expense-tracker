import React from 'react'
import { Settings } from 'modules/graphql'

interface SettingsContextInterface {
  settings: Settings
  saveSettings: (settings: Settings) => void
}

export const SettingsContext = React.createContext<SettingsContextInterface>({} as SettingsContextInterface)
