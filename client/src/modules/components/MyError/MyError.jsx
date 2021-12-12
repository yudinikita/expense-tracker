import React from 'react'
import PropTypes from 'prop-types'
import { MyErrorContent } from './components/MyErrorContent'
import styles from './MyError.module.scss'

// eslint-disable-next-line no-unused-vars
export const MyError = ({ error }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Упс! Возникла ошибка</h3>
      <MyErrorContent />
      <p>Не удалось получить данные. Проверьте интернет-подключение или попробуйте еще раз.</p>
    </div>
  )
}

MyError.propTypes = {
  error: PropTypes.object
}
