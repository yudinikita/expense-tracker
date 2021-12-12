import React from 'react'
import { useLoginForm } from './hooks'
import { MyLoader } from '../..'
import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  const {
    onSubmit,
    onChange,
    handleRegister,
    loading,
    error,
    email,
    password
  } = useLoginForm()

  if (loading) return <MyLoader />

  const renderError = () => error ? <p className={styles.error}>{error}</p> : null

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={'groupInput'}>
          <input
            className='mainInput'
            onChange={onChange}
            value={email}
            type='email'
            id='email'
            placeholder=' '
            required
            autoComplete='email'
            inputMode='email'
            autoFocus
            disabled={loading}
          />
          <label
            htmlFor='email'
            className='mainInput__label'
          >
            Email
          </label>
        </div>

        <div className={styles.inputPass + ' groupInput'}>
          <input
            className='mainInput'
            onChange={onChange}
            value={password}
            type='password'
            id='password'
            autoComplete='current-password'
            placeholder=' '
            required
            disabled={loading}
          />
          <label
            htmlFor='password'
            className='mainInput__label'
          >
            Пароль
          </label>
        </div>

        <button
          className='mainButton'
          type='submit'
        >
          Войти
        </button>
      </form>

      {renderError()}

      <div className={styles.registration}>
        <p>У вас еще нет аккаунта?</p>
        <button
          className='secondaryButton'
          type='button'
          onClick={handleRegister}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  )
}
