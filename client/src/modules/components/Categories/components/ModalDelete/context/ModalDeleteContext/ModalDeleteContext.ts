import { createContext } from 'react'
import { Category } from '../../../../../../graphql/__generated__/graphql.gen'

interface ModalDeleteContextType {
  onRequestClose: () => void
  selectedCategory: Category
}

export const ModalDeleteContext = createContext<ModalDeleteContextType>({} as ModalDeleteContextType)
