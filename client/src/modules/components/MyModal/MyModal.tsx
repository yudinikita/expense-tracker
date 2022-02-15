import React from 'react'
import Modal from 'react-modal'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 0,
    borderRadius: '10px',
    padding: '30px',
    maxWidth: '350px',
    background: 'var(--background-color)'
  }
}

interface Props {
  isOpen: boolean
  onRequestClose: (event: React.MouseEvent | React.KeyboardEvent) => void
  className?: string
}

export const MyModal: React.FC<Props> = ({
  isOpen,
  onRequestClose,
  className,
  children
}) => {
  return (
    <Modal
      className={className}
      style={modalStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  )
}
