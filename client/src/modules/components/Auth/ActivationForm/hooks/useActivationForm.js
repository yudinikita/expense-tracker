import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthUser, useSignIn } from 'react-auth-kit'
import { useActivationUser } from '../../../../hooks'

export const useActivationForm = () => {
  const auth = useAuthUser()
  const signIn = useSignIn()

  const email = auth()?.email || ''
  const activationCodeFromLink = useParams()?.code

  const { activateUser, error, loading } = useActivationUser()

  useEffect(async () => {
    if (activationCodeFromLink) {
      await authUser(activationCodeFromLink)
    }
  }, [activationCodeFromLink])

  const authUser = async (code) => {
    const response = await activateUser({
      variables: {
        activationCode: code
      }
    })
    if (response) {
      const userData = response?.data?.activate
      if (userData) {
        signIn({
          token: userData.accessToken,
          expiresIn: 30 * 24 * 60 * 60 * 1000,
          tokenType: 'Bearer',
          authState: {
            userId: userData.id,
            isActivated: userData.isActivated,
            email: userData.email,
          }
        })
      }
    }
  }

  const onChange = async (e) => {
    const value = e.target.value
    if (value.length === 3) {
      const isValid = e.target.validity.valid
      if (isValid) {
        await authUser(value)
      }
    }
  }

  return {
    email,
    onChange,
    error: error?.message || null,
    loading
  }
}
