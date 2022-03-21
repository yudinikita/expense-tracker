import React from 'react'
import { useHelpForm } from './hooks'
import { useTranslation } from 'react-i18next'
import { Button, Errors, Input, Space, TextArea } from 'modules/ui'

export const HelpForm: React.FC = () => {
  const { t } = useTranslation()
  const { formik, errors, invalid, error } = useHelpForm()

  if (error != null) return <Errors variant='default' />

  return (
    <form onSubmit={formik.handleSubmit}>
      <Space
        direction='vertical'
        size={25}
        blockItem
      >
        <Input
          label={t('help.input.title')}
          type='text'
          id='problemTitle'
          block
          validationText={errors.title}
          invalid={invalid.title}
          disabled={formik.isSubmitting}
          {...formik.getFieldProps('title')}
        />

        <TextArea
          label={t('help.input.more.title')}
          rows={4}
          id='problemDetail'
          block
          validationText={errors.detail}
          invalid={invalid.detail}
          disabled={formik.isSubmitting}
          {...formik.getFieldProps('detail')}
        />

        <Button
          type='submit'
          loading={formik.isSubmitting}
        >
          {t('help.button.title')}
        </Button>
      </Space>
    </form>
  )
}
