import React from 'react'
import classNames from 'classnames'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import s from './Link.module.scss'

interface LinkBaseProps extends React.AnchorHTMLAttributes<any> {
  variant?: 'default' | 'second'
  route?: boolean
  block?: boolean
}

type LinkProps = LinkBaseProps & Omit<RouterLinkProps, 'to'>

/**
 * Link is an actionable text component with connection to another web pages.
 */
export const Link: React.FC<LinkProps> = ({
  variant,
  className,
  route = false,
  block = false,
  href,
  children,
  ...otherProps
}) => {

  const props = {
    className: classNames(s.base, {
      [s.second]: variant === 'second',
      [s.block]: block
    }, className),
    ...otherProps
  }

  if (route && href) {
    return (
      <RouterLink
        to={href}
        {...props}
      >
        {children}
      </RouterLink>
    )
  }

  return (
    <a {...props} >
      {children}
    </a>
  )
}
