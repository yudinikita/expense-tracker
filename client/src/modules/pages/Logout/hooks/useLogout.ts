import { useNavigate } from 'react-router-dom'
import { useSignOut } from 'react-auth-kit'
import { useApolloClient } from '@apollo/client'

export const useLogout = () => {
  const signOut = useSignOut()
  const client = useApolloClient()
  const navigate = useNavigate()

  const logout = () => {
    clearCache()
    clearStorage()
    clearTheme()
    signOut()
    navigate('/')
  }

  const clearCache = () => {
    client.clearStore()
    client.cache.gc()
  }

  const clearStorage = () => {
    localStorage.clear()
    sessionStorage.clear()
  }

  const clearTheme = () => {
    document.documentElement.removeAttribute('data-theme')
  }

  return { logout }
}
