import React from 'react'
import { HelpDetail, InnerNavigate } from '../../../components'
import { useTranslation } from 'react-i18next'

export const HelpDetailPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <InnerNavigate title={t('help.question')} />
      <HelpDetail />
    </>
  )
}
