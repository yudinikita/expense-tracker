import React from 'react'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes = () => {
  const auth = useAuthUser()
  const isAuthenticated = useIsAuthenticated()
  const isActivated = auth()?.isActivated

  if (isAuthenticated()) {
    if (!isActivated) return <Navigate to={'/activate'} />
    return <Navigate to={'/'} />
  }

  return <Outlet />
}
