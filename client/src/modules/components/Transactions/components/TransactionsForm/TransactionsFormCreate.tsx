import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Formik } from 'formik'
import { Button, Space } from 'modules/ui'
import { useSettings } from 'modules/hooks'
import { TransactionFormValues } from './types'
import { useTransactionsFormCreate } from './hooks'
import { TransactionsSubform } from './components'
import { getAmountSign, getCurrencySymbol } from './utils'

export const TransactionsFormCreate: React.FC = () => {
  const { t } = useTranslation()
  const { settings } = useSettings()
  const { initialValues, onSubmit, validationSchema, categories } = useTransactionsFormCreate()

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
                {t('button.create')}
              </Button>
            </Space>
          </Form>
        ))}
      </Formik>
    </>
  )
}
