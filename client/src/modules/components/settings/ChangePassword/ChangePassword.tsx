import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input, Space, Typography } from 'modules/ui'
import { useChangePassword } from './hooks'

export const ChangePassword: React.FC = () => {
  const { t } = useTranslation()
  const { formik, errors, invalid } = useChangePassword()

  return (
    <form onSubmit={formik.handleSubmit}>
      <Space
        direction='vertical'
        size={25}
        blockItem
      >
        <Typography variant='h3'>{t('settings.security.password.title')}</Typography>

        <Input
          label={t('settings.security.password.current')}
          id='nowPassword'
          type='password'
          block
          validationText={errors.nowPassword}
          invalid={invalid.nowPassword}
          disabled={formik.isSubmitting}
          {...formik.getFieldProps('nowPassword')}
        />

        <Input
          label={t('settings.security.password.new')}
          id='newPassword'
          type='password'
          block
          validationText={errors.newPassword}
          invalid={invalid.newPassword}
          disabled={formik.isSubmitting}
          {...formik.getFieldProps('newPassword')}
        />

        <Button
          type='submit'
          loading={formik.isSubmitting}
        >
          {t('button.save')}
        </Button>
      </Space>
    </form>
  )
}
