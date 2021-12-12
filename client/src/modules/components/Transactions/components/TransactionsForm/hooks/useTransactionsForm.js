import { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { getLocalDate } from '../../../../../utils'
import { useGetCategories } from '../../../../../hooks'

const defaultValueFormData = {
  expense: true,
  income: false,
  amount: '',
  category: '',
  createdAt: '',
  commentary: ''
}

export const useTransactionsForm = (transaction) => {
  const alert = useAlert()
  const navigate = useNavigate()

  const [dataForm, setDataForm] = useState(defaultValueFormData)

  useEffect(() => {
    if (transaction) {
      const getFormData = getTransactionFormData(transaction)
      setDataForm({
        expense: getFormData.expense,
        income: getFormData.income,
        amount: getFormData.amount,
        category: getFormData.category,
        createdAt: getFormData.createdAt,
        commentary: getFormData.commentary
      })
    }
  }, [])

  const { categories, error } = useGetCategories()
  if (error) alert.error('Не удалось загрузить категории')

  const onChange = (e) => {
    const typeChange = e.target.id
    const valueChange = e.target.value

    switch (typeChange) {
      case 'amount':
        setDataForm({
          ...dataForm,
          amount: Number(valueChange) || dataForm?.amount
        })
        break
      case 'category':
        if (valueChange === 'create') navigate('/categories')
        setDataForm({
          ...dataForm,
          category: valueChange
        })
        break
      case 'createdAt':
        setDataForm({
          ...dataForm,
          createdAt: valueChange
        })
        break
      case 'commentary':
        setDataForm({
          ...dataForm,
          commentary: valueChange
        })
        break
      case 'expense':
        setDataForm({
          ...dataForm,
          expense: true,
          income: false
        })
        break
      case 'income':
        setDataForm({
          ...dataForm,
          expense: false,
          income: true
        })
        break
      default:
        break
    }
  }

  return {
    onChange,
    dataForm,
    categories
  }
}

const getTransactionFormData = (transaction) => {
  const expense = transaction?.amount ? Math.sign(transaction.amount) <= 0 : true
  const income = transaction?.amount ? Math.sign(transaction.amount) > 0 : false
  const amount = transaction?.amount ? Math.abs(transaction.amount) : ''
  const category = transaction?.category?.id ? transaction.category.id : ''
  const createdAt = transaction?.createdAt ? getLocalDate(transaction.createdAt) : ''
  const commentary = transaction?.commentary ? transaction.commentary : ''

  return {
    expense,
    income,
    amount,
    category,
    createdAt,
    commentary
  }
}
