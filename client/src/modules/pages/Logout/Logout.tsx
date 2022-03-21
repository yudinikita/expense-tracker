import React, { useEffect } from 'react'
import { useLogout } from './hooks'
import { Loaders } from 'modules/ui'

export const Logout: React.FC = () => {
  const { logout } = useLogout()

  useEffect(() => logout(), [])

  return <Loaders />
}
