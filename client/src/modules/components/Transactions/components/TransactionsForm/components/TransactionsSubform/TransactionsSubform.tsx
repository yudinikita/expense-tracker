import React from 'react'
import { useTranslation } from 'react-i18next'
import { Category } from 'modules/graphql'
import { Space } from 'modules/ui'
import { RadioBalance } from '../RadioBalance'
import { InputAmount } from '../InputAmount'
import { SelectCategory } from '../SelectCategory'
import { DatepickerDate } from '../DatepickerDate'
import { InputCommentary } from '../InputCommentary'

interface TransactionsSubformProps {
  categories?: Category[]
  amountSign?: React.ReactNode
  currency?: React.ReactNode
  loading?: boolean
}

export const TransactionsSubform: React.FC<TransactionsSubformProps> = ({
  categories = [],
  amountSign,
  currency,
  loading = false
}) => {
  const { t } = useTranslation()

  return (
    <Space
      direction='vertical'
      size={35}
      blockItem
    >
      <Space
        direction='horizontal'
        align='center'
        justify='evenly'
        block
      >
        <RadioBalance
          name='balance'
          id='balance-expense'
          value='expense'
        >
          {t('analytics.balance.expense')}
        </RadioBalance>

        <RadioBalance
          name='balance'
          id='balance-income'
          value='income'
        >
          {t('analytics.balance.income')}
        </RadioBalance>
      </Space>

      <InputAmount
        name='amount'
        inputMode='numeric'
        label={t('transactions.form.amount.title')}
        placeholder='0'
        required
        title={t('transactions.form.amount.hint')}
        prefix={amountSign ?? '-'}
        suffix={currency ?? '$'}
        disabled={loading}
      />

      <SelectCategory
        name='category'
        required
        label={t('transactions.form.categories.title')}
        placeholder={t('categories.select')}
        disabled={loading}
      >
        {categories && categories.map(category => (
          <option
            key={category?.id}
            value={category?.id}
          >
            {category?.title}
          </option>
        ))}
        <option value='create'>{t('transactions.form.categories.create')}</option>
      </SelectCategory>

      <DatepickerDate
        name='createdAt'
        label={t('transactions.form.date.title')}
        step='1'
        disabled={loading}
      />

      <InputCommentary
        name='commentary'
        label={t('transactions.form.commentary.title')}
        disabled={loading}
      />
    </Space>
  )
}
