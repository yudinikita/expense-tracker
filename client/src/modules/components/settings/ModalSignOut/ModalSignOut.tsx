import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Props as ModalProps } from 'react-modal'
import { Button, DialogContentContainer, Space, Typography } from 'modules/ui'

export const ModalSignOut: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleClickLogout = (): void => navigate('/logout')

  return (
    <DialogContentContainer
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Space
        direction='vertical'
        size={25}
        blockItem
      >
        <Typography variant='h2'>{t('user.logout.title')}</Typography>

        <Typography>{t('user.logout.desc')}</Typography>

        <Button onClick={handleClickLogout} block>
          {t('button.logout')}
        </Button>

        <Button
          variant='outline'
          onClick={onRequestClose}
          block
        >
          {t('button.cancel')}
        </Button>
      </Space>
    </DialogContentContainer>
  )
}
