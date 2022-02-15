import { ChangeEventHandler, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthUser, useSignIn } from 'react-auth-kit'
import { useActivateMutation } from '../../../../graphql/__generated__/graphql.gen'

export const useActivationForm = () => {
  const auth = useAuthUser()
  const signIn = useSignIn()

  const email = auth()?.['email'] ?? ''
  const activationCodeFromLink = useParams()?.['code']

  const [activateUser, { error, loading }] = useActivateMutation()

  useEffect(() => {
    if (activationCodeFromLink) {
      const getAuthUser = async () => {
        await authUser(activationCodeFromLink.toString())
      }

      getAuthUser().catch(console.error)
    }
  }, [activationCodeFromLink])

  const authUser = async (code: string) => {
    const response = await activateUser({
      variables: {
        input: {
          code
        }
      }
    })
    if (response) {
      const userData = response?.data?.activate
      if (userData != null) {
        signIn({
          token: userData.accessToken,
          expiresIn: 30 * 24 * 60 * 60 * 1000,
          tokenType: 'Bearer',
          authState: {
            userId: userData.id,
            isActivated: userData.isActivated,
            email: userData.email
          }
        })
      }
    }
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
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
