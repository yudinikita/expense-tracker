import React from 'react'
import { useTranslation } from 'react-i18next'
import { LoginForm, NavigationBar } from 'modules/components'
import { NAVIGATION } from 'modules/constants'

export const LoginPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <NavigationBar
        title={t('button.signin')}
        backButtonPath='/'
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <LoginForm />
    </div>
  )
}
