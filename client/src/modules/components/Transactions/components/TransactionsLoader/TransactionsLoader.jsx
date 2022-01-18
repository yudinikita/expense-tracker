import React from 'react'
import ContentLoader from 'react-content-loader'
import styles from './TransactionsLoader.module.scss'

const LoaderItem = (props) => (
  <ContentLoader
    speed={2}
    width={315}
    height={60}
    viewBox='0 0 315 60'
    title='Загрузка...'
    backgroundColor='#ebebeb'
    foregroundColor='#d2d2d2'
    {...props}
  >
    <rect x='0' y='0' rx='10' ry='10' width='140' height='29' />
    <rect x='227' y='0' rx='10' ry='10' width='88' height='29' />
    <rect x='0' y='39' rx='10' ry='10' width='187' height='21' />
  </ContentLoader>
)

export const TransactionsLoader = () => {
  return (
    <div className={styles.container}>
      <LoaderItem />
      <LoaderItem />
      <LoaderItem />
    </div>
  )
}
