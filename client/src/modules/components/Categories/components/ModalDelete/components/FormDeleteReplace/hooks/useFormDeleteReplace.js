import { useContext, useState } from 'react'
import { ModalDeleteContext } from '../../../context'
import { useMutation, useQuery } from '@apollo/client'
import { CATEGORIES } from '../../../../../../../graphql/queries'
import { DELETE_CATEGORY_REPLACE } from '../../../../../../../graphql/mutations'
import { useAlert } from 'react-alert'

export const useFormDeleteReplace = () => {
  const alert = useAlert()
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  const [selectReplaceId, setSelectReplaceId] = useState()

  const { data } = useQuery(CATEGORIES)

  const onReplaceSelect = (e) => {
    setSelectReplaceId(e.target.value)
  }

  const [deleteCategoryReplace, { loading, error }] = useMutation(
    DELETE_CATEGORY_REPLACE,
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

  const clickDeleteReplace = async () => {
    if (selectReplaceId) {
      try {
        await deleteCategoryReplace({
          variables: {
            id: selectedCategory.id,
            newId: selectReplaceId
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
