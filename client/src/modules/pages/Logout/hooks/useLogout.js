import { useNavigate } from 'react-router-dom'
import { useSignOut } from 'react-auth-kit'
import { useApolloClient } from '@apollo/client'

export const useLogout = () => {
  const signOut = useSignOut()
  const client = useApolloClient()
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await clearCache()
      await clearStorage()
      await clearTheme()
    } catch (e) {
      console.log(e)
    } finally {
      signOut()
      navigate('/')
    }
  }

  const clearCache = async () => {
    await client.clearStore()
    client.cache.gc()
  }

  const clearStorage = async () => {
    localStorage.clear()
    sessionStorage.clear()
  }

  const clearTheme = async () => {
    document.documentElement.removeAttribute('data-theme')
  }

  return { logout }
}
