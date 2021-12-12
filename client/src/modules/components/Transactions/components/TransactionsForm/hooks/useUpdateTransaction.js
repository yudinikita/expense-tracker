import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useValidationForm } from './useValidationForm'
import { useSetUpdateTransaction } from '../../../../../hooks'
import { getLocalDate } from '../../../../../utils'

export const useUpdateTransaction = (dataForm, transaction) => {
  const navigate = useNavigate()
  const alert = useAlert()

  const { isValid, messageFailed } = useValidationForm(dataForm)

  const { setUpdateTransaction, loading } = useSetUpdateTransaction()

  const handleClickUpdate = async (e) => {
    e.preventDefault()
    if (isValid) {
      try {
        const nowDate = getLocalDate(new Date())
        await setUpdateTransaction({
          variables: {
            id: transaction?.id,
            transaction: {
              amount: dataForm.expense ? dataForm?.amount * -1 : Math.abs(dataForm?.amount),
              category: dataForm?.category,
              createdAt: dataForm?.createdAt ? dataForm?.createdAt : nowDate,
              commentary: dataForm?.commentary
            }
          }
        })
        alert.success('Операция сохранена')
      } catch {
        alert.error('Ошибка при изменении операции')
      }
    } else {
      alert.show(messageFailed)
    }
  }

  const handleClickCancel = () => navigate(-1)

  return {
    handleClickUpdate,
    handleClickCancel,
    updateLoading: loading
  }
}
