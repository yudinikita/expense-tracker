import { ChangeEventHandler, SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignIn } from 'react-auth-kit'
import { EXPIRES_IN } from '../../../../data/constants'
import { useLoginMutation, UserLoginInput } from '../../../../graphql/__generated__/graphql.gen'

const defaultFormData: UserLoginInput = {
  email: '',
  password: ''
}

export const useLoginForm = () => {
  const signIn = useSignIn()
  const navigate = useNavigate()

  const [formData, setFormData] = useState(defaultFormData)

  const [loginUser, { loading, error }] = useLoginMutation()

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const res = await loginUser({
      variables: {
        input: {
          email: formData.email,
          password: formData.password
        }
      }
    })

    const userData = res?.data?.login

    if (userData != null) {
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
