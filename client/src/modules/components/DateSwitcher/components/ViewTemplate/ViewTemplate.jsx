import React from 'react'
import PropTypes from 'prop-types'
import SVG from 'react-inlinesvg'
import '../../DateSwitcher.scss'

const propTypes = {
  navigationLabel: PropTypes.string,
  handleClickPrev: PropTypes.func,
  handleClickLabel: PropTypes.func,
  handleClickNext: PropTypes.func,
}

export const ViewTemplate = ({
  navigationLabel,
  handleClickPrev,
  handleClickLabel,
  handleClickNext
}) => {
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
