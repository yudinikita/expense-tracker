import React from 'react'
import { MyErrorContent } from './components/MyErrorContent'
import styles from './MyError.module.scss'

interface Props {
  error: any
}

// @ts-expect-error
export const MyError: React.FC<Props> = ({ error }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Упс! Возникла ошибка</h3>
      <MyErrorContent />
      <p>Не удалось получить данные. Проверьте интернет-подключение или попробуйте еще раз.</p>
    </div>
  )
}
