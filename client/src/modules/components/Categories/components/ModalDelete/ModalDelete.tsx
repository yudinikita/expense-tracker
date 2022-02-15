import React, { useContext } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { ModalDeleteContext } from './context'
import { MyModal } from '../../..'
import { FormDeleteBase, FormDeleteReplace, FormDeleteWithTransactions } from './components'
import styles from './ModalDelete.module.scss'

const propTypes = {
  isOpen: PropTypes.bool
}

export const ModalDelete = ({ isOpen }: InferProps<typeof propTypes>) => {
  const { selectedCategory, onRequestClose } = useContext(ModalDeleteContext)

  return (
    <MyModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Удаление категории</h2>
        <h3>{selectedCategory?.title}</h3>

        <FormDeleteBase />
        <FormDeleteReplace />
        <FormDeleteWithTransactions />

        <button
          className='secondaryButton'
          type='button'
          onClick={onRequestClose}
        >
          Отмена
        </button>
      </div>
    </MyModal>
  )
}

ModalDelete.propTypes = propTypes