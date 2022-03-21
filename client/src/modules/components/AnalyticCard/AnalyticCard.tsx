import React from 'react'
import classNames from 'classnames'
import { Loaders, Price, Space, Typography } from 'modules/ui'
import s from './AnalyticCard.module.scss'

export interface AnalyticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  price?: number
  percent?: number
  colorBg?: string
  colorTrain?: string
  colorTrack?: string
  loading?: boolean
}

/**
 * Cards contain analytic data about a single subject.
 */
export const AnalyticCard: React.FC<AnalyticCardProps> = ({
  title = '',
  subtitle = '',
  price = 0,
  percent = 0,
  colorBg,
  colorTrain,
  colorTrack,
  loading = false,
  className,
  style,
  ...otherProps
}) => {

  if (loading) return <Loaders />

  const props = {
    className: classNames(s.card, className),
    style: {
      backgroundColor: colorBg,
      ...style
    },
    ...otherProps
  }

  return (
    <div {...props}>
      <Space
        className={s.content}
        direction='horizontal'
        justify='between'
        align='center'
        block
      >
        <Space
          direction='vertical'
          size={5}
        >
          <Typography
            className={s.title}
            variant='h4'
          >
            {title}
          </Typography>
          <Typography
            className={s.subtitle}
            variant='text'
            type='secondary'
            fontSize={16}
          >
            {subtitle}
          </Typography>
          <Price
            className={s.price}
            amount={price}
          />
        </Space>

        <div className={s.percentContainer}>
          <svg
            className={s.circularChart}
            viewBox='0 0 36 36'
          >
            <path
              className={s.circleBg}
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <path
              className={s.track}
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
              strokeDasharray={'100, 100'}
              style={{ stroke: colorTrack }}
            />
            <path
              className={s.train}
              d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
              strokeDasharray={`${Math.abs(percent)}, 100`}
              style={{ stroke: colorTrain }}
            />
          </svg>
          <Typography
            className={s.value}
            variant='h4'
            type='strong'
          >
            {percent}%
          </Typography>
        </div>
      </Space>
    </div>
  )
}
