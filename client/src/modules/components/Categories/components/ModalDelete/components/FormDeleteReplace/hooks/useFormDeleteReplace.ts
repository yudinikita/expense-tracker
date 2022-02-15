import { ChangeEventHandler, useContext, useState } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useAlert } from 'react-alert'
import {
  useCategoriesQuery,
  useDeleteCategoryReplaceMutation
} from '../../../../../../../graphql/__generated__/graphql.gen'

export const useFormDeleteReplace = () => {
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

  if (error != null) alert.error('Не удалось удалить категорию')

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
        alert.success('Категория заменена')
      } catch {
        alert.error('Не удалось удалить категорию')
      } finally {
        onRequestClose()
      }
    } else {
      alert.error('Категория не выбрана')
    }
  }

  return {
    categories: data?.categories,
    onReplaceSelect,
    clickDeleteReplace,
    loading
  }
}
