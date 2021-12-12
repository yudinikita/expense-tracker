import React from 'react'
import { InnerNavigate, RegistrationForm } from '../../../components'

export const RegistrationPage = () => {
  return (
    <div>
      <InnerNavigate title='Регистрация' linkPath='/' />
      <RegistrationForm />
    </div>
  )
}
