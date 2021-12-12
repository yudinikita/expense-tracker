import React from 'react'
import { MyLoader } from '../../MyLoader'
import { useRegistrationForm } from './hooks'
import styles from './RegistrationForm.module.scss'

export const RegistrationForm = () => {
  const {
    onSubmit,
    onChange,
    handleLogin,
    loading,
    error,
    email,
    password
  } = useRegistrationForm()

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
            inputMode='email'
            autoComplete='email'
            placeholder=' '
            required
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
            autoComplete='new-password'
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
          Зарегистрироваться
        </button>
      </form>

      {renderError()}

      <div className={styles.login}>
        <p>У вас уже есть аккаунт?</p>
        <button
          className='secondaryButton'
          type='button'
          onClick={handleLogin}
        >
          Войти
        </button>
      </div>
    </div>
  )
}
