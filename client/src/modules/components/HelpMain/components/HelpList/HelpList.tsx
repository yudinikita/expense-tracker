import React from 'react'
import { MyError, MyLoader } from '../../..'
import { HelpListItem } from './components'
import { useHelpsQuery } from '../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

export const HelpList = () => {
  const { t } = useTranslation()
  const { data, loading, error } = useHelpsQuery()

  if (loading) return <MyLoader />
  if (error != null) return <MyError error={error} />

  const renderHelpList = () => {
    if (data?.helps?.length === 0 || data?.helps === undefined) return <p>{t('help.notfound')}</p>

    return (
      <ul className='list-reset'>
        {data.helps.map(helpItem => (
          <li key={helpItem?.id}>
            <HelpListItem helpItem={helpItem!} />
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      <h2>{t('help.myquestions')}</h2>
      <br />
      {renderHelpList()}
    </div>
  )
}
