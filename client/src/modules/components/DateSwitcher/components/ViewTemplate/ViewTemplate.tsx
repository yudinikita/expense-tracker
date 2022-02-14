import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import SVG from 'react-inlinesvg'
import '../../DateSwitcher.scss'

const propTypes = {
  navigationLabel: PropTypes.string.isRequired,
  handleClickPrev: PropTypes.func.isRequired,
  handleClickLabel: PropTypes.func.isRequired,
  handleClickNext: PropTypes.func.isRequired,
}

export const ViewTemplate = ({
  navigationLabel,
  handleClickPrev,
  handleClickLabel,
  handleClickNext
}: InferProps<typeof propTypes>) => {
  return (
    <div className={'date-switcher__navigate'}>
      <button
        className={'date-switcher__navigate__arrow date-switcher__navigate__prev'}
        onClick={handleClickPrev}
      >
        <SVG src='/images/icons/arrow-left.svg' />
      </button>

      <button
        className={'date-switcher__navigate__label'}
        onClick={handleClickLabel}
      >
          <span className={'date-switcher__navigate__label-text'}>
            {navigationLabel}
          </span>
      </button>

      <button
        className={'date-switcher__navigate__arrow date-switcher__navigate__next'}
        onClick={handleClickNext}
      >
        <SVG src='/images/icons/arrow-right.svg' />
      </button>
    </div>
  )
}

ViewTemplate.propTypes = propTypes
