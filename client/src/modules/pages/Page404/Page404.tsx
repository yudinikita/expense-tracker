import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InnerNavigate } from '../../components/index'
import { Content404Page } from './Content404Page'

export const Page404 = () => {
  const navigate = useNavigate()

  const goHome = () => navigate('/')
  const goHelp = () => navigate('/help')

  return (
    <>
      <InnerNavigate title='Ошибка 404' linkPath='/' />

      <Content404Page />

      <p>Такой страницы больше нет или она никогда не&#160;существовала.</p>

      <button
        className='mainButton'
        type='button'
        onClick={goHome}
      >
        На главную
      </button>
      <br /><br />
      <button
        className='secondaryButton'
        type='button'
        onClick={goHelp}
      >
        Помощь
      </button>
    </>
  )
}
