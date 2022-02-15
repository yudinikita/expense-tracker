import React, { useState } from 'react'

export const useAnalyticsContainer = () => {
  const [typeAnalytic, setTypeAnalytic] = useState('')

  const handleCheckboxClick: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    setTypeAnalytic(value)
  }

  return { typeAnalytic, handleCheckboxClick }
}
