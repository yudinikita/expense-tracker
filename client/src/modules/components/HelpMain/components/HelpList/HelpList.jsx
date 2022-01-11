import React from 'react'
import { MyError, MyLoader } from '../../..'
import { useGetHelps } from '../../../../hooks'
import { HelpListItem } from './components'

export const HelpList = () => {
  const { helps, loading, error } = useGetHelps()

  if (loading) return <MyLoader />
  if (error) return <MyError error={error} />

  const renderHelpList = () => {
    if (helps.length === 0) return <p>Вопросов не найдено</p>

    return (
      <ul className='list-reset'>
        {helps.map(helpItem => (
          <li key={helpItem?.id}>
            <HelpListItem helpItem={helpItem} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h2>Мои вопросы</h2>
      <br />
      {renderHelpList()}
    </div>
  )
}
