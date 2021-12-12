import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useSetUpdateUserPassword } from '../../../../../../hooks'

const validation = (dataForm) => {
  if (dataForm?.newPassword?.length < 6) {
    return {
      isValid: false,
      message: 'Минимум 6 символов'
    }
  }

  return {
    isValid: true,
    message: ''
  }
}

const defaultDataForm = {
  nowPassword: '',
  newPassword: ''
}

export const useFormChangePassword = () => {
  const alert = useAlert()
  const [dataForm, setDataForm] = useState(defaultDataForm)
  const [content, setContent] = useState(false)

  const { setUpdateUserPassword, loading } = useSetUpdateUserPassword()

  const onSubmit = async e => {
    e.preventDefault()
    const { isValid, message } = validation(dataForm)
    if (isValid) {
      try {
        const response = await setUpdateUserPassword({
          variables: {
            userPasswordInput: {
              ...dataForm
            }
          }
        })

        const successResponse = response?.data?.updateUserPassword?.success
        const messageResponse = response?.data?.updateUserPassword?.message

        if (successResponse) {
          setDataForm(defaultDataForm)
          setContent(true)
          alert.success(messageResponse)
        } else {
          alert.error(messageResponse)
        }
      } catch {
        alert.error('Не удалось обновить пароль')
      }
    } else {
      alert.show(message)
    }
  }

  const onChange = async e => {
    const type = e.target.id
    const value = e.target.value

    switch (type) {
      case 'newPassword':
        setDataForm({
          ...dataForm,
          newPassword: value
        })
        break
      case 'nowPassword':
        setDataForm({
          ...dataForm,
          nowPassword: value
        })
        break
    }
  }

  return {
    onChange,
    onSubmit,
    loading,
    dataForm,
    content
  }
}
