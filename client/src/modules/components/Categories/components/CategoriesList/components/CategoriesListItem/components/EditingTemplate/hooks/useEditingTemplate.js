import { useContext, useState } from 'react'
import { CategoriesListItemContext } from '../../../context'
import { useValidationCategory } from '../../../../../../../hooks'
import { useMutation } from '@apollo/client'
import { UPDATE_CATEGORY } from '../../../../../../../../../graphql/mutations'
import { useAlert } from 'react-alert'

export const useEditingTemplate = () => {
  const alert = useAlert()
  const { category, setEditing } = useContext(CategoriesListItemContext)
  const [editInput, setEditInput] = useState(category?.title)
  const { isValid, messageFailed } = useValidationCategory(editInput)

  const [updateCategory, { loading }] = useMutation(UPDATE_CATEGORY, {
    refetchQueries: ['categories']
  })

  const onChangeEditInput = (e) => {
    setEditInput(e.target.value)
  }

  const handleClickEditSave = async () => {
    if (isValid) {
      try {
        await updateCategory({
          variables: {
            id: category?.id,
            category: {
              title: editInput
            }
          }
        })
        alert.success('Категория изменена')
      } catch {
        alert.error('Не удалось получить данные')
      } finally {
        setEditing(false)
      }
    } else {
      alert.show(messageFailed)
    }
  }

  const handleClickEditCancel = () => {
    setEditInput(category?.title)
    setEditing(false)
  }

  return {
    handleClickEditSave,
    handleClickEditCancel,
    onChangeEditInput,
    editInput,
    loading
  }
}
