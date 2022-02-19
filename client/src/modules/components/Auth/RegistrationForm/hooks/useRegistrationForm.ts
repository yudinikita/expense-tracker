import { ChangeEventHandler, SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { useAlert } from 'react-alert'
import { EXPIRES_IN } from '../../../../data/constants'
import { useRegistrationMutation, UserRegistrationInput } from '../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

const defaultFormData: UserRegistrationInput = {
  email: '',
  password: ''
}

export const useRegistrationForm = () => {
  const { t } = useTranslation()
  const signIn = useSignIn()
  const alert = useAlert()
  const navigate = useNavigate()

  const [formData, setFormData] = useState(defaultFormData)

  const [registrationUser, { loading, error }] = useRegistrationMutation()

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const res = await registrationUser({
      variables: {
        input: {
          email: formData.email,
          password: formData.password
        }
      }
    })

    const userData = res?.data?.registration

    if (userData != null) {
      if (signIn({
        token: userData.accessToken,
        expiresIn: EXPIRES_IN,
        tokenType: 'Bearer',
        authState: {
          userId: userData.id,
          isActivated: userData.isActivated,
          email: userData.email
        }
      })) {
        navigate('/')
      }
    } else {
      alert.error(t('alert.failed'))
    }
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()

    const type = e.target.id
    const value = e.target.value

    switch (type) {
      case 'email':
        setFormData({
          ...formData,
          email: value
        })
        break
      case 'password':
        setFormData({
          ...formData,
          password: value
        })
        break
    }
  }

  const handleLogin = () => navigate('/login')

  return {
    onSubmit,
    onChange,
    handleLogin,
    loading,
    error: error?.message || null,
    email: formData?.email,
    password: formData?.password
  }
}
