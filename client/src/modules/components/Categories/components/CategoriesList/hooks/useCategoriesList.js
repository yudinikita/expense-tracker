import { useState } from 'react'

export const useCategoriesList = () => {
  const [selectedCategory, setSelectedCategory] = useState()
  const [modalIsOpen, setIsOpen] = useState(false)

  const selectCategory = (category) => setSelectedCategory(category)

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
