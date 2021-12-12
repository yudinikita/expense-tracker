import { getLocalDate } from '../../../../../utils'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useValidationForm } from './useValidationForm'
import { useSetCreateTransaction } from '../../../../../hooks'

export const useCreateTransaction = (dataForm) => {
  const navigate = useNavigate()
  const alert = useAlert()

  const { isValid, messageFailed } = useValidationForm(dataForm)

  const { setCreateTransaction, loading } = useSetCreateTransaction()

  const handleClickCreate = async (e) => {
    e.preventDefault()
    if (isValid) {
      try {
        const nowDate = getLocalDate(new Date())
        await setCreateTransaction({
          variables: {
            transaction: {
              amount: dataForm.expense ? dataForm?.amount * -1 : Math.abs(dataForm?.amount),
              category: dataForm?.category,
              createdAt: dataForm?.createdAt ? dataForm?.createdAt : nowDate,
              commentary: dataForm?.commentary
            }
          }
        })
        alert.success('Операция создана')
        navigate('/transactions')
      } catch {
        alert.error('Ошибка при создании операции')
      }
    } else {
      alert.show(messageFailed)
    }
  }

  return {
    handleClickCreate,
    createLoading: loading
  }
}
