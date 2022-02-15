import { useState } from 'react'
import { Category } from '../../../../../graphql/__generated__/graphql.gen'

export const useCategoriesList = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>({} as Category)
  const [modalIsOpen, setIsOpen] = useState(false)

  const selectCategory = (category: Category) => setSelectedCategory(category)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return {
    selectedCategory,
    modalIsOpen,
    selectCategory,
    openModal,
    closeModal
  }
}
