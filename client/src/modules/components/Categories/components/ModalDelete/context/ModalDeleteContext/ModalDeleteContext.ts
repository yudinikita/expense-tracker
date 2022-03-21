import { createContext } from 'react'
import { Category } from 'modules/graphql'

interface ModalDeleteContextType {
  onRequestClose: () => void
  selectedCategory: Category
}

export const ModalDeleteContext = createContext<ModalDeleteContextType>({} as ModalDeleteContextType)
