import { useContext } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useMutation } from '@apollo/client'
import { DELETE_CATEGORY_WITH_TRANSACTIONS } from '../../../../../../../graphql/mutations'
import { useAlert } from 'react-alert'

export const useFormDeleteWithTransactions = () => {
  const alert = useAlert()
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  const [deleteCategoryWithTransactions, { error, loading }] = useMutation(
    DELETE_CATEGORY_WITH_TRANSACTIONS,
    {
      refetchQueries: [
        'categories',
        'transactions',
        'analyticsBalance',
        'analyticsExpense',
        'analyticsIncome'
      ]
    })

  if (error) alert.error('Не удалось удалить категорию')

  const clickDeleteWithTransactions = async () => {
    try {
      await deleteCategoryWithTransactions({
        variables: {
          id: selectedCategory.id
        }
      })
      alert.success('Категория и ее операции удалены')
    } catch {
      alert.error('Не удалось удалить категорию')
    } finally {
      onRequestClose()
    }
  }

  return {
    clickDeleteWithTransactions,
    loading
  }
}
