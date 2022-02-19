import React from 'react'
import { useFormChangePassword } from './hooks'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import key from '../../../../../assets/animation/key.json'
import { useTranslation } from 'react-i18next'

export const FormChangePassword = () => {
  const { t } = useTranslation()
  const { loading, onSubmit, onChange, dataForm, content } = useFormChangePassword()

  const renderContent = () => {
    if (content) {
      return (
        <div style={{ width: '200px', margin: '50px auto' }}>
          <Lottie play loop animationData={key} speed={0.7} />
        </div>
      )
    }
    return null
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>{t('settings.security.password.title')}</h3>
      <br />
      <div className='groupInput'>
        <input
          className='mainInput'
          type='password'
          id='nowPassword'
          autoComplete='current-password'
          placeholder=' '
          required
          onChange={onChange}
          value={dataForm?.nowPassword}
          disabled={loading}
        />
        <label
          htmlFor='newCategory'
          className='mainInput__label'
        >
          {t('settings.security.password.current')}
        </label>
      </div>
      <br />
      <div className='groupInput'>
        <input
          className='mainInput'
          type='password'
          id='newPassword'
          autoComplete='new-password'
          placeholder=' '
          required
          value={dataForm?.newPassword}
          onChange={onChange}
          disabled={loading}
        />
        <label
          htmlFor='newPassword'
          className='mainInput__label'
        >
          {t('settings.security.password.new')}
        </label>
      </div>
      <br />
      <button
        className='mainButton'
        type='submit'
        disabled={loading}
      >
        {t('button.save')}
      </button>

      {renderContent()}
    </form>
  )
}
