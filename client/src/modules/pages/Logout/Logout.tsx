import React, { useEffect } from 'react'
import { useLogout } from './hooks'
import { MyLoader } from '../../components'

export const Logout: React.FC = () => {
  const { logout } = useLogout()

  useEffect(() => logout(), [])

  return <MyLoader />
}
