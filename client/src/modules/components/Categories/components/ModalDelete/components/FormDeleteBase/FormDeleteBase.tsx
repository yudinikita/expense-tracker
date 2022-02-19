import React from 'react'
import { useFormDeleteBase } from './hooks'
import { useTranslation } from 'react-i18next'

export const FormDeleteBase = () => {
  const { t } = useTranslation()
  const { clickDeleteBase, loading } = useFormDeleteBase()

  return (
    <div>
      <p>{t('categories.modaldelete.desc.normal')}</p>
      <button
        className='mainButton'
        type='button'
        onClick={clickDeleteBase}
        disabled={loading}
      >
        {t('categories.modaldelete.btn.delete')}
      </button>
      <br /><br />
    </div>
  )
}
