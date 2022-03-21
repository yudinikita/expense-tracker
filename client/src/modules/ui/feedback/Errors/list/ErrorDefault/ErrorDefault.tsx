import React from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorContent } from './ErrorContent'
import s from './ErrorDefault.module.scss'

export const ErrorDefault = () => {
  const { t } = useTranslation()

  return (
    <div className={s.container}>
      <h3 className={s.title}>{t('error.title')}</h3>
      <ErrorContent />
      <p>{t('error.desc')}</p>
    </div>
  )
}
