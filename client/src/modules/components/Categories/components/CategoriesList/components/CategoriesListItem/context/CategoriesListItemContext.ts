import { createContext, Dispatch, SetStateAction } from 'react'
import { Category } from 'modules/graphql'

interface ICategoriesListItemContext {
  category: Category
  setEditing: Dispatch<SetStateAction<boolean>>
  openModalDelete: Function
  selectCategory: (category: Category) => void
}

export const CategoriesListItemContext = createContext<ICategoriesListItemContext>({} as ICategoriesListItemContext)
