import { useNavigate } from 'react-router-dom'
import { useSignOut } from 'react-auth-kit'
import { useApolloClient } from '@apollo/client'

export const useLogout = () => {
  const signOut = useSignOut()
  const client = useApolloClient()
  const navigate = useNavigate()

  const logout = (): void => {
    clearCache()
    clearStorage()
    clearTheme()
    signOut()
    navigate('/')
  }

  const clearCache = (): void => {
    client.clearStore().catch((e) => console.error(e))
    client.cache.gc()
  }

  const clearStorage = (): void => {
    localStorage.clear()
    sessionStorage.clear()
  }

  const clearTheme = (): void => {
    document.documentElement.removeAttribute('data-theme')
  }

  return { logout }
}
