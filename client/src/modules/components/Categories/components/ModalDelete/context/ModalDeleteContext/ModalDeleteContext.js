import { createContext } from 'react'

const defaultContext = {
  onRequestClose: () => null,
  selectedCategory: {}
}

export const ModalDeleteContext = createContext(defaultContext)
