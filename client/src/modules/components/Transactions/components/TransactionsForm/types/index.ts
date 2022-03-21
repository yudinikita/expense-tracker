import { getCreatedAt } from '../utils'

export interface TransactionFormValues {
  balance: 'expense' | 'income'
  amount: string
  category: string
  createdAt: string
  commentary: string
}

export const transactionFormInitialValues: TransactionFormValues = {
  balance: 'expense',
  amount: '',
  category: '',
  createdAt: getCreatedAt(),
  commentary: ''
}
