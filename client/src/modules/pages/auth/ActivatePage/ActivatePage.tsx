import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { ActivationForm, NavigationBar } from 'modules/components'

export const ActivatePage: React.FC = () => {
  const { t } = useTranslation()
  const auth = useAuthUser()
  const isAuthenticated = useIsAuthenticated()

  const isActivated: boolean = auth()?.['isActivated']

  if (!isAuthenticated()) return <Navigate to='/start' />
  if (isActivated) return <Navigate to='/' />

  return (
    <>
      <NavigationBar
        title={t('other.check_mail')}
        backButtonPath='/logout'
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <ActivationForm />
    </>
  )
}
