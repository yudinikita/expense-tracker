import React from 'react'
import { Settings } from '../../graphql/__generated__/graphql.gen'

interface SettingsContextInterface {
  settings: Settings
  saveSettings: (settings: Settings) => void
}

export const SettingsContext = React.createContext<SettingsContextInterface>({} as SettingsContextInterface)
