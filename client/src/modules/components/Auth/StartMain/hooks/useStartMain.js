import { useNavigate } from 'react-router-dom'

export const useStartMain = () => {
  const navigate = useNavigate()

  const handleSignUp = () => navigate('/registration')

  const handleSignIn = () => navigate('/login')

  return {
    handleSignUp,
    handleSignIn
  }
}
