import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Props as ModalProps } from 'react-modal'
import { Button, DialogContentContainer, Divider, Space, Typography } from 'modules/ui'
import { ModalDeleteContext } from './context'
import { FormDeleteBase, FormDeleteReplace, FormDeleteWithTransactions } from './components'
import s from './ModalDelete.module.scss'

export const ModalDelete: React.FC<ModalProps> = ({ isOpen }) => {
  const { t } = useTranslation()

  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  return (
    <DialogContentContainer
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <Space
        direction='vertical'
        className={s.container}
        size={15}
        block
        blockItem
      >
        <Typography variant='h2'>
          {t('categories.modaldelete.title')}
        </Typography>

        <Typography
          variant='h3'
          className={s.categoryTitle}
        >
          {selectedCategory?.title}
        </Typography>

        <Divider space={1} variant='invisible' />

        <FormDeleteBase />

        <Divider space={1} variant='invisible' />

        <FormDeleteReplace />

        <Divider space={1} variant='invisible' />

        <FormDeleteWithTransactions />

        <Divider space={1} variant='invisible' />

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
