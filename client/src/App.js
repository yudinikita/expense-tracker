import React from 'react'
import { AuthProvider } from 'react-auth-kit'
import { Provider as AlertProvider } from 'react-alert'
import { RouteComponent } from './modules/routes/routes'
import { MyAlert, optionsAlert } from './modules/components/MyAlert/MyAlert'
import './modules/styles/main.scss'

export const App = () => (
  <AuthProvider
    authType='localstorage'
    authName='_auth'
  >
    <AlertProvider template={MyAlert} {...optionsAlert}>
      <RouteComponent />
    </AlertProvider>
  </AuthProvider>
)
