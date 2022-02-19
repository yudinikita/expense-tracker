import React from 'react'
import { HelpMain, InnerNavigate } from '../../../components'
import { useTranslation } from 'react-i18next'

export const HelpPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <InnerNavigate title={t('help.title')} />
      <HelpMain />
    </>
  )
}
