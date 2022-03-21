import React from 'react'
import { Button, Icon, Typography } from 'modules/ui'
import { LeftOutline, RightOutline } from 'modules/assets/icons'
import s from '../../DateSwitcher.module.scss'

interface ViewTemplateProps {
  navigationLabel?: string
  handleClickPrev?: React.MouseEventHandler<HTMLButtonElement>
  handleClickLabel?: React.MouseEventHandler<HTMLButtonElement>
  handleClickNext?: React.MouseEventHandler<HTMLButtonElement>
}

export const ViewTemplate: React.FC<ViewTemplateProps> = ({
  navigationLabel = '',
  handleClickPrev = () => null,
  handleClickLabel = () => null,
  handleClickNext = () => null
}) => {

  return (
    <div className={s.navigate}>
      <Button
        className={s.arrow}
        variant='default'
        iconButton={<Icon icon={LeftOutline} />}
        onClick={handleClickPrev}
      />

      <Button
        className={s.navigate__label}
        variant='default'
        onClick={handleClickLabel}
        block
      >
        <Typography
          className={s.navigate__labelText}
          variant='h4'
        >
          {navigationLabel}
        </Typography>
      </Button>

      <Button
        className={s.arrow}
        variant='default'
        iconButton={<Icon icon={RightOutline} />}
        onClick={handleClickNext}
      />
    </div>
  )
}
