import { useContext } from 'react'
import { useAlert } from 'react-alert'
import { useTranslation } from 'react-i18next'
import { useDeleteCategoryMutation } from 'modules/graphql'
import { ModalDeleteContext } from '../../../context'

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
