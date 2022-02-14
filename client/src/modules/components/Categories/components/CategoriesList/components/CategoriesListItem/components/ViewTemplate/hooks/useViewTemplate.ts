import { useContext } from 'react'
import { CategoriesListItemContext } from '../../../context'

export const useViewTemplate = () => {
  const {
    category,
    setEditing,
    selectCategory,
    openModalDelete
  } = useContext(CategoriesListItemContext)

  const handleClickEdit = () => {
    setEditing(true)
  }

  const handleClickDelete = () => {
    selectCategory(category)
    openModalDelete()
  }

  return {
    handleClickEdit,
    handleClickDelete,
    category
  }
}
