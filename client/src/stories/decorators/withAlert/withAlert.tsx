import React from 'react'
import { Provider as AlertProvider } from 'react-alert'
import { AlertBox, optionsAlert } from 'modules/ui'

export const withAlert = (storyFn: Function) => (
  <AlertProvider template={AlertBox} {...optionsAlert}>
    {storyFn()}
  </AlertProvider>
)
