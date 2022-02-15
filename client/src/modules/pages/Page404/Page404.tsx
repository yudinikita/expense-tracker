import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InnerNavigate } from '../../components'
import { Content404Page } from './Content404Page'

export const Page404: React.FC = () => {
  const navigate = useNavigate()

  const goHome = (): void => navigate('/')
  const goHelp = (): void => navigate('/help')

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
