import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { ActivationForm, InnerNavigate } from '../../../components'

export const ActivatePage = () => {
  const auth = useAuthUser()
  const isAuthenticated = useIsAuthenticated()

  const isActivated = auth()?.isActivated

  if (!isAuthenticated()) return <Navigate to={'/start'} />
  if (isActivated) return <Navigate to={'/'} />

  return (
    <>
      <InnerNavigate title='Проверка почты' linkPath='/logout' />
      <ActivationForm />
    </>
  )
}
