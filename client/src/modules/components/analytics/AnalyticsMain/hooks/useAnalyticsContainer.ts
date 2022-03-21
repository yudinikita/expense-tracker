import React, { useState } from 'react'

export const useAnalyticsContainer = () => {
  const [typeAnalytic, setTypeAnalytic] = useState('balance')

  const handleChangeChecked: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTypeAnalytic(e.target.value)
  }

  return { typeAnalytic, handleChangeChecked }
}
