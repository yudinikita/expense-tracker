import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MyModal } from '../..'

interface Props {
  isOpen: boolean
  onRequestClose: (event: React.MouseEvent | React.KeyboardEvent) => void
}

export const ModalSignOut: React.FC<Props> = ({
  isOpen,
  onRequestClose
}) => {
  const navigate = useNavigate()
  const handleClickLogout = (): void => navigate('/logout')

  return (
    <MyModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div>
        <h2>Выход из аккаунта</h2>
        <p>Вы уверены, что хотите выйти из аккаунта?</p>
        <button
          type='button'
          onClick={handleClickLogout}
          className='mainButton'
        >
          Выйти
        </button>
        <br /><br />
        <button
          type='button'
          onClick={onRequestClose}
          className='secondaryButton'
        >
          Отмена
        </button>
      </div>
    </MyModal>
  )
}
