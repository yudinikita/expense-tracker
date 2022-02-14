import { useContext } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useAlert } from 'react-alert'
import { useDeleteCategoryWithTransactionsMutation } from '../../../../../../../graphql/__generated__/graphql.gen'

export const useFormDeleteWithTransactions = () => {
  const alert = useAlert()
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  const [deleteCategoryWithTransactions, { error, loading }] = useDeleteCategoryWithTransactionsMutation(
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
          input: {
            id: selectedCategory.id
          }
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
