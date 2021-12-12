import React from 'react'
import { useFormDeleteBase } from './hooks'

export const FormDeleteBase = () => {
  const { clickDeleteBase, loading } = useFormDeleteBase()

  return (
    <div>
      <p>Вы&#160;уверены, что хотите удалить категорию? Операции получат статус &#171;Без категории&#187;</p>
      <button
        className='mainButton'
        type='button'
        onClick={clickDeleteBase}
        disabled={loading}
      >
        Удалить категорию
      </button>
      <br /><br />
    </div>
  )
}
