import React from 'react'
import { useFormDeleteWithTransactions } from './hooks'

export const FormDeleteWithTransactions = () => {
  const { clickDeleteWithTransactions, loading } = useFormDeleteWithTransactions()

  return (
    <div>
      <p>Удалить категорию и все операции с ней</p>
      <button
        className='mainButton'
        type='button'
        onClick={clickDeleteWithTransactions}
        disabled={loading}
      >
        Удалить операции
      </button>
      <br /><br />
    </div>
  )
}
