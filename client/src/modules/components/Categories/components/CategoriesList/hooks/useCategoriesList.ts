import { useState } from 'react'
import { Category } from 'modules/graphql'

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
