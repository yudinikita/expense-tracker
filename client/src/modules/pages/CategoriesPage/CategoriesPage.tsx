import React from 'react'
import { Categories, NavigationBar } from '../../components'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'

export const CategoriesPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('categories.title')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <Categories />
    </>
  )
}
