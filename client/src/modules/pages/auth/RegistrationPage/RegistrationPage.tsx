import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavigationBar, RegistrationForm } from 'modules/components'
import { NAVIGATION } from 'modules/constants'

export const RegistrationPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <NavigationBar
        title={t('button.signup')}
        backButtonPath='/'
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <RegistrationForm />
    </div>
  )
}
