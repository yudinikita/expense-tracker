import { useContext } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useAlert } from 'react-alert'
import { useDeleteCategoryWithTransactionsMutation } from '../../../../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

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
