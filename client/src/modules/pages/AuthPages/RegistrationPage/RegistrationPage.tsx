import React from 'react'
import { InnerNavigate, RegistrationForm } from '../../../components'

export const RegistrationPage: React.FC = () => {
  return (
    <div>
      <InnerNavigate title='Регистрация' linkPath='/' />
      <RegistrationForm />
    </div>
  )
}
