import { useContext } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useAlert } from 'react-alert'
import { useDeleteCategoryMutation } from '../../../../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

export const useFormDeleteBase = () => {
  const { t } = useTranslation()
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

  if (error != null) alert.error(t('alert.category.delete.failed'))

  const clickDeleteBase = async () => {
    try {
      await deleteCategory({
        variables: {
          input: {
            id: selectedCategory.id
          }
        }
      })
      alert.success(t('alert.category.delete.success.normal'))
    } catch {
      alert.error(t('alert.category.delete.failed'))
    } finally {
      onRequestClose()
    }
  }

  return {
    clickDeleteBase,
    loading
  }
}
