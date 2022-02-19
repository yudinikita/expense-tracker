import React from 'react'
import { Categories, InnerNavigate } from '../../components'
import { useTranslation } from 'react-i18next'

export const CategoriesPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <InnerNavigate title={t('categories.title')} />
      <Categories />
    </>
  )
}
