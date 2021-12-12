import React from 'react'
import { MainHeader, MainNavigation } from '../../components'
import { Outlet } from 'react-router-dom'
import styles from './LayoutMain.module.scss'

export const LayoutMain = () => {
  return (
    <div className={styles.container}>
      <MainHeader />

      <main className='container'>
        <Outlet />
      </main>

      <MainNavigation />
    </div>
  )
}
