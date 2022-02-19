import React from 'react'
import { useFormDeleteWithTransactions } from './hooks'
import { useTranslation } from 'react-i18next'

export const FormDeleteWithTransactions = () => {
  const { t } = useTranslation()
  const { clickDeleteWithTransactions, loading } = useFormDeleteWithTransactions()

  return (
    <div>
      <p>{t('categories.modaldelete.desc.trans')}</p>
      <button
        className='mainButton'
        type='button'
        onClick={clickDeleteWithTransactions}
        disabled={loading}
      >
        {t('categories.modaldelete.btn.trans')}
      </button>
      <br /><br />
    </div>
  )
}
