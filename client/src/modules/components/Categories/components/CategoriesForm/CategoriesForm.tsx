import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input, Space } from 'modules/ui'
import { useCategoriesForm } from './hooks'

export const CategoriesForm = () => {
  const { t } = useTranslation()

  const { formik, errors, invalid } = useCategoriesForm()

  return (
    <form onSubmit={formik.handleSubmit}>
      <Space
        direction='vertical'
        size={25}
        blockItem
      >
        <Input
          label={t('categories.input')}
          id='newCategory'
          block
          validationText={errors.title}
          invalid={invalid.title}
          disabled={formik.isSubmitting}
          {...formik.getFieldProps('title')}
        />

        <Button
          type='submit'
          loading={formik.isSubmitting}
        >
          {t('button.add')}
        </Button>
      </Space>
    </form>
  )
}
