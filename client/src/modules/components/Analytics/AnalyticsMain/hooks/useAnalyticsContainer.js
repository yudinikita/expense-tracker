import { useState } from 'react'

export const useAnalyticsContainer = () => {
  const [typeAnalytic, setTypeAnalytic] = useState('')

  const handleCheckboxClick = (e) => {
    const value = e.target.value
    setTypeAnalytic(value)
  }

  return { typeAnalytic, handleCheckboxClick }
}
