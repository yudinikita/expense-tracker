import React from 'react'
import { useStartMain } from './hooks'
import { Logo } from '../..'
import styles from './StartMain.module.scss'

export const StartMain = () => {
  const { handleSignUp, handleSignIn } = useStartMain()

  return (
    <div className={styles.container}>
      <Logo width={116} height={116} className={styles.logo} />
      <h1 className={styles.title}>Денежки</h1>
      <p className={styles.text}>Ведите учет расходов и доходов. Бесплатно и просто.</p>
      <button
        className='mainButton'
        onClick={handleSignUp}
        autoFocus
      >
        Создать аккаунт
      </button>
      <button
        className={`${styles.btnSecond} thirdButton`}
        onClick={handleSignIn}
      >
        Войти
      </button>
    </div>
  )
}
