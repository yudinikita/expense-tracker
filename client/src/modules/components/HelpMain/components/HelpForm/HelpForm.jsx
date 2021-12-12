import React from 'react'
import { MyError } from '../../../MyError'
import { useHelpForm } from './hooks'
import styles from './HelpForm.module.scss'

export const HelpForm = () => {
  const { loading, error, onChange, onSubmit, dataForm } = useHelpForm()

  if (error) return <MyError error={error} />

  return (
    <form onSubmit={onSubmit}>
      <div className={'groupInput ' + styles.inputFirst}>
        <input
          className='mainInput'
          type='text'
          id='problemTitle'
          placeholder=' '
          disabled={loading}
          value={dataForm?.problemTitle}
          onChange={onChange}
          required
        />
        <label
          htmlFor='problemTitle'
          className='mainInput__label'
        >
          Суть проблемы
        </label>
      </div>

      <div className={'groupInput ' + styles.inputSecond}>
        <textarea
          className={'mainInput'}
          rows='4'
          id='problemDetail'
          placeholder=' '
          disabled={loading}
          value={dataForm?.problemDetail}
          onChange={onChange}
        />
        <label
          className='mainInput__label'
          htmlFor='problemDetail'
        >
          Подробно о проблеме
        </label>
      </div>

      <button
        className='mainButton'
        type='submit'
        disabled={loading}
      >
        Задать вопрос
      </button>
    </form>
  )
}
