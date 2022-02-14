import React from 'react'
import { CategoriesForm, CategoriesList, CategoriesLoader } from './components'
import { MyError } from '../MyError'
import { useGetCategories } from '../../hooks'

export const Categories = () => {
  const { categories, loading, error } = useGetCategories()

  if (loading) return <CategoriesLoader />
  if (error) return <MyError error={error} />

  return (
    <div>
      <CategoriesForm />
      <CategoriesList categories={categories} />
    </div>
  )
}
