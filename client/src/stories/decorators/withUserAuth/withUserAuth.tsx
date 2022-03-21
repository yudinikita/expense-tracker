import React, { useEffect } from 'react'
import { AuthProvider, useSignIn } from 'react-auth-kit'

const AuthSignInMock: React.FC = ({ children }) => {
  const signIn = useSignIn()

  useEffect(() => {
    signIn({
      token: 'TokenMock',
      expiresIn: 1000 * 60 * 60 * 24 * 30,
      tokenType: 'Bearer',
      authState: {
        userId: '123456',
        isActivated: true,
        email: 'usermock@mail.com'
      }
    })
  })

  return (
    <>
      {children}
    </>
  )
}

const AuthProviderMock: React.FC = ({
  children
}) => {
  return (
    <AuthProvider authName='_auth' authType='localstorage'>
      <AuthSignInMock>
        {children}
      </AuthSignInMock>
    </AuthProvider>
  )
}

export const withUserAuth = (storyFn: Function) => {
  return (
    <AuthProviderMock>
      {storyFn()}
    </AuthProviderMock>
  )
}
