import React from 'react'
import classNames from 'classnames'
import s from './Layout.module.scss'

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The top layout with the default style, in which any element can be nested, and must be placed in `Layout`.
   */
  header?: React.ReactNode
  /**
   * The bottom layout with the default style, in which any element can be nested, and must be placed in `Layout`.
   */
  footer?: React.ReactNode
}

/**
 * The layout wrapper, in which `Header`, `Content`, `Footer`, and can be placed in any parent container.
 */
export const Layout: React.FC<LayoutProps> = ({
  className,
  header,
  footer,
  children,
  ...otherProps
}) => {

  return (
    <div
      className={classNames(s.layout, className)}
      {...otherProps}
    >

      {renderHeader(header)}

      {renderContent(children)}

      {renderFooter(footer)}

    </div>
  )
}

const renderHeader = (header: React.ReactNode) => {
  return (
    header
      ? <Header>{header}</Header>
      : null
  )
}

const renderContent = (content: React.ReactNode) => {
  return (
    content
      ? <Content>{content}</Content>
      : null
  )
}

const renderFooter = (footer: React.ReactNode) => {
  return (
    footer
      ? <Footer>{footer}</Footer>
      : null
  )
}

const Header: React.FC = ({ children }) => {
  return (
    <header className={s.header}>
      {children}
    </header>
  )
}

const Content: React.FC = ({ children }) => {
  return (
    <main className={s.content}>
      {children}
    </main>
  )
}

const Footer: React.FC = ({ children }) => {
  return (
    <footer className={s.footer}>
      {children}
    </footer>
  )
}
