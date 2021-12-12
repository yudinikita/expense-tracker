import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_CATEGORY } from '../../../../../graphql/mutations'
import { useValidationCategory } from '../../../hooks'
import { useAlert } from 'react-alert'

export const useCategoriesForm = () => {
  const alert = useAlert()
  const [inputCategory, setInputCategory] = useState('')
  const { isValid, messageFailed } = useValidationCategory(inputCategory)

  const [createCategory, { error, loading }] = useMutation(CREATE_CATEGORY, {
    refetchQueries: ['categories']
  })

  if (error) alert.error('Не удалось добавить категорию')

  const onSubmitForm = async e => {
    e.preventDefault()
    if (isValid) {
      try {
        await createCategory({
          variables: {
            category: {
              title: inputCategory
            }
          }
        })
        alert.success('Категория добавлена')
      } catch {
        alert.error('Не удалось создать категорию')
      } finally {
        setInputCategory('')
      }
    } else {
      alert.show(messageFailed)
    }
  }

  const onChangeInput = async e => {
    setInputCategory(e.target.value)
  }

  return {
    onSubmitForm,
    onChangeInput,
    loading,
    inputCategory
  }
}
