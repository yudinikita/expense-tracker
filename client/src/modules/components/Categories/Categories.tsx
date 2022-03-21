import React from 'react'
import { CategoriesForm, CategoriesList, CategoriesLoader } from './components'
import { Category, useCategoriesQuery } from 'modules/graphql'
import { Errors, Space } from 'modules/ui'

export const Categories = () => {
  const { data, loading, error } = useCategoriesQuery()

  const categories = data?.categories as Category[]

  if (loading) return <CategoriesLoader />
  if (error != null) return <Errors />

  return (
    <Space
      direction='vertical'
      size={50}
      block
      blockItem
    >
      <CategoriesForm />
      <CategoriesList categories={categories} />
    </Space>
  )
}
