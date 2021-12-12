import React from 'react'
import { useActivationForm } from './hooks'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import styles from './ActivationForm.module.scss'

import mailSend from '../../../assets/animation/mailSend.json'

export const ActivationForm = () => {
  const { email, onChange, error, loading } = useActivationForm()

  const renderError = () => error ? <p className={styles.error}>{error}</p> : null

  return (
    <div>
      <div className={styles.content}>
        <Lottie play loop animationData={mailSend} speed={0.5} />
      </div>

      <p className={styles.desc}>Мы отправили сообщение с кодом проверки на Вашу почту</p>
      <p className={styles.email}>{email}</p>

      <form className={styles.form}>
        <div className={'groupInput'}>
          <input
            className='mainInput'
            type='text'
            id='activationCode'
            inputMode='numeric'
            autoComplete='one-time-code'
            maxLength='3'
            autoFocus
            pattern='[0-9]*'
            placeholder=' '
            required
            onChange={onChange}
            disabled={loading}
          />
          <label
            htmlFor='activationCode'
            className='mainInput__label'
          >
            Код активации
          </label>
        </div>
      </form>

      {renderError()}
    </div>
  )
}
