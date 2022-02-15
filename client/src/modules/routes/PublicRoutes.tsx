import React from 'react'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes: React.FC = () => {
  const checkAuth = useIsAuthenticated()
  const isAuthenticated = checkAuth()

  const auth = useAuthUser()
  const user = auth()

  const isActivated: boolean = user?.['isActivated']

  if (isAuthenticated) {
    if (!isActivated) return <Navigate to='/activate' />
    return <Navigate to='/' />
  }

  return <Outlet />
}
