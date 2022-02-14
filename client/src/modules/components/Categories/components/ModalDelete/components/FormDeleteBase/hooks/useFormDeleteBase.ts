import { useContext } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useAlert } from 'react-alert'
import { useDeleteCategoryMutation } from '../../../../../../../graphql/__generated__/graphql.gen'

export const useFormDeleteBase = () => {
  const alert = useAlert()
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)
  
  const [deleteCategory, { loading, error }] = useDeleteCategoryMutation({
    refetchQueries: [
      'categories',
      'transactions',
      'analyticsBalance',
      'analyticsExpense',
      'analyticsIncome'
    ]
  })

  if (error) alert.error('Не удалось удалить категорию')

  const clickDeleteBase = async () => {
    try {
      await deleteCategory({
        variables: {
          input: {
            id: selectedCategory.id
          }
        }
      })
      alert.success('Категория удалена')
    } catch {
      alert.error('Не удалось удалить категорию')
    } finally {
      onRequestClose()
    }
  }

  return {
    clickDeleteBase,
    loading
  }
}
