import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Formik } from 'formik'
import { Transaction } from 'modules/graphql'
import { Button, Space } from 'modules/ui'
import { useSettings } from 'modules/hooks'
import { TransactionFormValues } from './types'
import { useTransactionsFormEdit } from './hooks'
import { TransactionsSubform } from './components'
import { getAmountSign, getCurrencySymbol } from './utils'

interface TransactionsFormEditProps {
  transaction?: Transaction
}

export const TransactionsFormEdit: React.FC<TransactionsFormEditProps> = ({
  transaction
}) => {
  const { t } = useTranslation()
  const { settings } = useSettings()

  const {
    initialValues,
    onSubmit,
    validationSchema,
    categories,
    handleClickCancel
  } = useTransactionsFormEdit(transaction)

  return (
    <>
      <Formik<TransactionFormValues>
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(({
          values,
          isSubmitting
        }) => (
          <Form>
            <Space
              direction='vertical'
              size={25}
            >
              <TransactionsSubform
                categories={categories}
                amountSign={getAmountSign(values?.balance)}
                currency={getCurrencySymbol(settings?.currency)}
                loading={isSubmitting}
              />

              <Button
                type='submit'
                loading={isSubmitting}
              >
                {t('button.save')}
              </Button>
              <Button
                variant='outline'
                type='button'
                loading={isSubmitting}
                onClick={handleClickCancel}
              >
                {t('button.cancel')}
              </Button>
            </Space>
          </Form>
        ))}
      </Formik>
    </>
  )
}
