import { createContext } from 'react'

const defaultContext = {
  category: {},
  setEditing: () => null,
  openModalDelete: () => null,
  selectCategory: () => null
}

export const CategoriesListItemContext = createContext(defaultContext)
