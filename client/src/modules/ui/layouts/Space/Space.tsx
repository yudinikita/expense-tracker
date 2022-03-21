import React from 'react'
import classNames from 'classnames'
import { toArray } from 'modules/utils'
import { Item } from './Item'
import s from './Space.module.scss'

type AlignType = 'start' | 'end' | 'center' | 'baseline'
type JustifyType = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'

interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Align items
   */
  align?: AlignType
  /**
   * Justify items
   */
  justify?: JustifyType
  /**
   * Optionally specify a block to render with full width
   */
  block?: boolean
  /**
   * Optionally specify a block item to render with full width
   */
  blockItem?: boolean
  /**
   * The space direction
   */
  direction?: 'vertical' | 'horizontal'
  /**
   * The space size
   */
  size?: number | [number, number]
  /**
   * Auto wrap line, when `horizontal` effective
   */
  wrap?: boolean
}

/**
 * Set components spacing.
 */
export const Space: React.FC<SpaceProps> = ({
  className,
  align = 'baseline',
  size = 10,
  direction = 'horizontal',
  justify,
  wrap = false,
  block = false,
  blockItem = false,
  style,
  children,
  ...otherProps
}) => {

  const [horizontalSize, verticalSize] = React.useMemo(
    () => ((Array.isArray(size) ? size : [size, size]) as [number, number]).map(item => item), [size]
  )

  const childNodes = toArray(children)

  if (childNodes.length === 0) {
    return null
  }

  const nodes = childNodes.map((child, i) => {

    return (
      <Item
        className={classNames(s.item, {
          [s.blockItem]: blockItem
        })}
        key={`${s.item}-${i}`}
      >
        {child}
      </Item>
    )
  })

  const gapStyle: React.CSSProperties = {}

  if (wrap) {
    gapStyle.flexWrap = 'wrap'
  }

  gapStyle.columnGap = horizontalSize
  gapStyle.rowGap = verticalSize

  const customStyle: React.CSSProperties = {
    alignItems: align,
    flexDirection: direction === 'vertical' ? 'column' : undefined,
    flexWrap: wrap ? 'wrap' : undefined,
    justifyContent: justify ? getJustify(justify) : undefined,
    ...gapStyle,
    ...style
  }

  const props = {
    className: classNames(s.space, {
        [s.block]: block
      },
      className
    ),
    style: { ...customStyle },
    ...otherProps
  }

  return (
    <div{...props}>
      {nodes}
    </div>
  )
}

const getJustify = (justify: JustifyType) => {
  switch (justify) {
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'center':
      return 'center'
    case 'between':
      return 'space-between'
    case 'around':
      return 'space-around'
    case 'evenly':
      return 'space-evenly'
  }
}
