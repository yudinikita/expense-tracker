import { ChangeEventHandler, useContext, useState } from 'react'
import { useAlert } from 'react-alert'
import { useTranslation } from 'react-i18next'
import { ModalDeleteContext } from '../../../context'
import { useCategoriesQuery, useDeleteCategoryReplaceMutation } from 'modules/graphql'

export const useFormDeleteReplace = () => {
  const { t } = useTranslation()
  const alert = useAlert()
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  const [selectReplaceId, setSelectReplaceId] = useState<string | null>(null)

  const { data } = useCategoriesQuery()

  const onReplaceSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectReplaceId(e.target.value)
  }

  const [deleteCategoryReplace, { loading, error }] = useDeleteCategoryReplaceMutation(
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

  const clickDeleteReplace = async () => {
    if (selectReplaceId) {
      try {
        await deleteCategoryReplace({
          variables: {
            input: {
              id: selectedCategory.id,
              newId: selectReplaceId
            }
          }
        })
        alert.success(t('alert.category.delete.success.replace'))
      } catch {
        alert.error(t('alert.category.delete.failed'))
      } finally {
        onRequestClose()
      }
    } else {
      alert.error(t('alert.failed'))
    }
  }

  return {
    categories: data?.categories,
    onReplaceSelect,
    clickDeleteReplace,
    loading
  }
}
