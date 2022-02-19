import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MyModal } from '../..'
import { useTranslation } from 'react-i18next'

interface Props {
  isOpen: boolean
  onRequestClose: (event: React.MouseEvent | React.KeyboardEvent) => void
}

export const ModalSignOut: React.FC<Props> = ({
  isOpen,
  onRequestClose
}) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleClickLogout = (): void => navigate('/logout')

  return (
    <MyModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div>
        <h2>{t('user.logout.title')}</h2>
        <p>{t('user.logout.desc')}</p>
        <button
          type='button'
          onClick={handleClickLogout}
          className='mainButton'
        >
          {t('button.logout')}
        </button>
        <br /><br />
        <button
          type='button'
          onClick={onRequestClose}
          className='secondaryButton'
        >
          {t('button.cancel')}
        </button>
      </div>
    </MyModal>
  )
}
