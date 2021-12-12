import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { useAlert } from 'react-alert'
import { useLoginUser } from '../../../../hooks'
import { EXPIRES_IN } from '../../../../data/constants'

const defaultFormData = {
  email: '',
  password: ''
}

export const useLoginForm = () => {
  const signIn = useSignIn()
  const alert = useAlert()
  const navigate = useNavigate()

  const [formData, setFormData] = useState(defaultFormData)

  const { loginUser, loading, error } = useLoginUser()

  const onSubmit = async e => {
    e.preventDefault()
    try {
      const res = await loginUser({
        variables: {
          userInput: {
            email: formData.email,
            password: formData.password
          }
        }
      })
      const userData = res?.data?.login
      if (userData) {
        signIn({
          token: userData.accessToken,
          expiresIn: EXPIRES_IN,
          tokenType: 'Bearer',
          authState: {
            userId: userData.id,
            isActivated: userData.isActivated,
            email: userData.email
          }
        })
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

  const handleRegister = () => navigate('/registration')

  return {
    onSubmit,
    onChange,
    handleRegister,
    loading,
    error: error?.message || null,
    email: formData?.email,
    password: formData?.password
  }
}
