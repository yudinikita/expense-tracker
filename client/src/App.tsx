import React from 'react'
import { AuthProvider } from 'react-auth-kit'
import { Provider as AlertProvider } from 'react-alert'
import { useTranslation } from 'react-i18next'
import { MainApolloProvider } from 'plugins/apollo'
import { AlertBox, optionsAlert } from 'modules/ui'
import { RouteComponent } from 'modules/routes/routes'
import './modules/styles/main.scss'

export const App = () => {
  const { t } = useTranslation()

  document.title = t('page.title')

  return (
    <MainApolloProvider>
      <AuthProvider
        authType='localstorage'
        authName='_auth'
      >
        <AlertProvider template={AlertBox} {...optionsAlert}>
          <RouteComponent />
        </AlertProvider>
      </AuthProvider>
    </MainApolloProvider>
  )
}
