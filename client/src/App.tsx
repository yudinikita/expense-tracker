import React from 'react'
import { AuthProvider } from 'react-auth-kit'
import { Provider as AlertProvider } from 'react-alert'
import { RouteComponent } from './modules/routes/routes'
import { MyAlert, optionsAlert } from './modules/components/MyAlert'
import './modules/styles/main.scss'
import { MyApolloProvider } from './apollo'

export const App = () => (
  <React.StrictMode>
    <MyApolloProvider>
      <AuthProvider
        authType='localstorage'
        authName='_auth'
      >
        {/* @ts-ignore */}
        <AlertProvider template={MyAlert} {...optionsAlert}>
          <RouteComponent />
        </AlertProvider>
      </AuthProvider>
    </MyApolloProvider>
  </React.StrictMode>
)
