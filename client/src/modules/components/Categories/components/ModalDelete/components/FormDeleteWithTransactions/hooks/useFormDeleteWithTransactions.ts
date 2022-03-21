import { useContext } from 'react'
import { useAlert } from 'react-alert'
import { useTranslation } from 'react-i18next'
import { useDeleteCategoryWithTransactionsMutation } from 'modules/graphql'
import { ModalDeleteContext } from '../../../context'

export const useFormDeleteWithTransactions = () => {
  const { t } = useTranslation()
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

  if (error != null) alert.error(t('alert.category.delete.failed'))

  const clickDeleteWithTransactions = async () => {
    try {
      await deleteCategoryWithTransactions({
        variables: {
          input: {
            id: selectedCategory.id
          }
        }
      })
      alert.success(t('alert.category.delete.success.trans'))
    } catch {
      alert.error(t('alert.category.delete.failed'))
    } finally {
      onRequestClose()
    }
  }

  return {
    clickDeleteWithTransactions,
    loading
  }
}
