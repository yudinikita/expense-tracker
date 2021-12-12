import { useNavigate } from 'react-router-dom'
import { useSignOut } from 'react-auth-kit'
import { useApolloClient } from '@apollo/client'

export const useLogout = () => {
  const signOut = useSignOut()
  const client = useApolloClient()
  const navigate = useNavigate()

  const logout = async () => {
    await clearCache()
    await clearStorage()
    signOut()
    navigate('/')
  }

  const clearCache = async () => {
    await client.clearStore()
    client.cache.gc()
  }

  const clearStorage = async () => {
    localStorage.clear()
    sessionStorage.clear()
  }

  return { logout }
}
