import React from 'react'
import { CategoriesForm, CategoriesList, CategoriesLoader } from './components'
import { MyError } from '../MyError'
import { Category, useCategoriesQuery } from '../../graphql/__generated__/graphql.gen'

export const Categories = () => {
  const { data, loading, error } = useCategoriesQuery()

  const categories = data?.categories as Category[]

  if (loading) return <CategoriesLoader />
  if (error != null) return <MyError error={error} />

  return (
    <div>
      <CategoriesForm />
      <CategoriesList categories={categories} />
    </div>
  )
}
