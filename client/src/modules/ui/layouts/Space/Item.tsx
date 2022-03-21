import React from 'react'

interface ItemProps {
  className: string
  children: React.ReactNode
}

export const Item: React.FC<ItemProps> = ({
  className,
  children
}) => {

  if (children === null || children === undefined) {
    return null
  }

  return (
    <>
      <div className={className}>
        {children}
      </div>
    </>
  )
}
