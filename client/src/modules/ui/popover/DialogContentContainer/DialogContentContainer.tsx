import React from 'react'
import Modal, { Props as ModalProps } from 'react-modal'

/**
 * This component is a style component, it provide the look and feel of elevation.
 */
export const DialogContentContainer: React.FC<ModalProps> = ({
  className,
  isOpen,
  onRequestClose,
  children,
  style,
  ...otherProps
}) => {

  return (
    <Modal
      className={className}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      style={modalStyles}
      {...otherProps}
    >
      {children}
    </Modal>
  )
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 0,
    borderRadius: 'var(--border-radius-base)',
    padding: '30px',
    maxWidth: '350px',
    background: 'var(--background-color)'
  }
}
