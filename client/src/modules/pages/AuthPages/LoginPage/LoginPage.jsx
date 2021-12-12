import React from 'react'
import { InnerNavigate, LoginForm } from '../../../components'

export const LoginPage = () => {
  return (
    <div>
      <InnerNavigate title='Вход' linkPath='/' />
      <LoginForm />
    </div>
  )
}
