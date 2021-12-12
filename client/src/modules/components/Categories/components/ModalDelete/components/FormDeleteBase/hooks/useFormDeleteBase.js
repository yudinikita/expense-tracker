import { useContext } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useMutation } from '@apollo/client'
import { DELETE_CATEGORY } from '../../../../../../../graphql/mutations'
import { useAlert } from 'react-alert'

export const useFormDeleteBase = () => {
  const alert = useAlert()
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  const [deleteCategory, { loading, error }] = useMutation(
    DELETE_CATEGORY,
    {
      refetchQueries: [
        'categories',
        'transactions',
        'analyticsBalance',
        'analyticsExpense',
        'analyticsIncome'
      ],
    })

  if (error) alert.error('Не удалось удалить категорию')

  const clickDeleteBase = async () => {
    try {
      await deleteCategory({
        variables: {
          id: selectedCategory.id
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
