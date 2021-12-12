import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { useAlert } from 'react-alert'
import { useRegistrationUser } from '../../../../hooks'
import { EXPIRES_IN } from '../../../../data/constants'

const defaultFormData = {
  email: '',
  password: ''
}

export const useRegistrationForm = () => {
  const signIn = useSignIn()
  const alert = useAlert()
  const navigate = useNavigate()

  const [formData, setFormData] = useState(defaultFormData)

  const { registrationUser, loading, error } = useRegistrationUser()

  const onSubmit = async e => {
    e.preventDefault()
    try {
      const res = await registrationUser({
        variables: {
          userInput: {
            email: formData.email,
            password: formData.password
          }
        }
      })
      const userData = res?.data?.registration
      if (userData) {
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
        alert.error('Ошибка при регистрации')
      }
    } catch (e) {
      return null
    }
  }

  const onChange = (e) => {
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
