import React, { useContext } from 'react'
import { ModalDeleteContext } from './context'
import { MyModal } from '../../..'
import { FormDeleteBase, FormDeleteReplace, FormDeleteWithTransactions } from './components'
import styles from './ModalDelete.module.scss'
import { useTranslation } from 'react-i18next'

interface Props {
  isOpen: boolean
}

export const ModalDelete: React.FC<Props> = ({ isOpen }) => {
  const { t } = useTranslation()

  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  return (
    <MyModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>{t('categories.modaldelete.title')}</h2>
        <h3 className={styles.categoryTitle}>{selectedCategory?.title}</h3>

        <FormDeleteBase />
        <FormDeleteReplace />
        <FormDeleteWithTransactions />

        <button
          className='secondaryButton'
          type='button'
          onClick={onRequestClose}
        >
          {t('button.cancel')}
        </button>
      </div>
    </MyModal>
  )
}
