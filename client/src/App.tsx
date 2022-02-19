import React from 'react'
import { AuthProvider } from 'react-auth-kit'
import { Provider as AlertProvider } from 'react-alert'
import { MyApolloProvider } from './plugins/apollo'
import { MyAlert, optionsAlert } from './modules/components/MyAlert'
import { RouteComponent } from './modules/routes/routes'
import './modules/styles/main.scss'

export const App = () => {
  return (
    <MyApolloProvider>
      <AuthProvider
        authType='localstorage'
        authName='_auth'
      >
        {/* @ts-expect-error */}
        <AlertProvider template={MyAlert} {...optionsAlert}>
          <RouteComponent />
        </AlertProvider>
      </AuthProvider>
    </MyApolloProvider>
  )
}
