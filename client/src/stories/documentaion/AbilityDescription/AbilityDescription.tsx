import React from 'react'
import s from './AbilityDescription.module.scss'

interface Props {
  title: string
  imageSrc: string
  linkHref: string
}

export const AbilityDescription: React.FC<Props> = ({
  title,
  imageSrc,
  linkHref,
  children
}) => {
  return (
    <section className={s.section}>
      <img
        className={s.image}
        src={imageSrc}
        alt={title}
      />
      <h3 className={s.title}>{title}</h3>
      <span className={s.content}>{children}</span>
      <a
        className={s.link}
        href={linkHref}
      >
        Read more
      </a>
    </section>
  )
}
