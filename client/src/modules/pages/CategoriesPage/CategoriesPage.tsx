import React from 'react'
import { Categories, InnerNavigate } from '../../components'

export const CategoriesPage: React.FC = () => {
  return (
    <>
      <InnerNavigate title='Категории' />
      <Categories />
    </>
  )
}
