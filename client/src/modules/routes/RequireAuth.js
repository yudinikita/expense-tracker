import React from 'react'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import { Navigate, Outlet } from 'react-router-dom'

export const RequireAuth = () => {
  const isAuthenticated = useIsAuthenticated()
  const auth = useAuthUser()

  const isActivated = auth()?.isActivated

  if (!isAuthenticated()) return <Navigate to={'/start'} />
  if (!isActivated) return <Navigate to={'/activate'} />

  return <Outlet />
}
