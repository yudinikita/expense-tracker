import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Icon, Lottie, Space, Typography } from 'modules/ui'
import { LeftOutline } from 'modules/assets/icons'
import s from './NavigationBar.module.scss'

type TitleVariant = 'default' | 'large'

interface NavigationBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The navigation bar title can be used to describe
   */
  title?: string
  /**
   * The subtitle page
   */
  subtitle?: React.ReactNode
  /**
   * The title variant
   */
  titleVariant?: TitleVariant
  /**
   * The animation data for Lottie
   */
  animationData?: object
  /**
   * The back button
   */
  backButton?: boolean
  /**
   * The custom path for left button
   */
  backButtonPath?: string
  /**
   * The space bottom
   */
  spaceBottom?: number
}

/**
 * The top app bar displays information and actions about the current screen.
 */
export const NavigationBar: React.FC<NavigationBarProps> = ({
  title,
  subtitle,
  titleVariant = 'default',
  animationData,
  spaceBottom,
  backButton,
  backButtonPath,
  style,
  ...otherProps
}) => {
  const navigate = useNavigate()

  const customStyle = {
    marginBottom: spaceBottom,
    ...style
  }

  const props = {
    style: { ...customStyle },
    ...otherProps
  }

  return (
    <Space
      direction='vertical'
      size={15}
      {...props}
    >
      <Space align='center'>
        {renderBackButton(navigate, backButton, backButtonPath)}

        {renderTitle(title, titleVariant)}

        {renderLottie(animationData)}
      </Space>

      {renderSubtitle(subtitle)}
    </Space>
  )
}

const renderBackButton = (navigate: Function, backButton?: boolean, backButtonPath?: string) => {
  const handleClick = () => {
    if (backButtonPath) return navigate(backButtonPath)
    return navigate(-1)
  }

  return backButton || backButtonPath
    ? (
      <Button
        variant='invisible'
        iconButton={<Icon className={s.backButtonIcon} icon={LeftOutline} iconSize={21} />}
        onClick={handleClick}
      />
    )
    : null
}

const renderTitle = (title?: string, titleVariant?: TitleVariant) =>
  title
    ? (
      <Typography
        className={s.title}
        variant={getTitleVariant(titleVariant)}
      >
        {title}
      </Typography>
    )
    : null

const getTitleVariant = (titleVariant?: TitleVariant) => {
  switch (titleVariant) {
    case 'large':
      return 'h1'
    case 'default':
    default:
      return 'h2'
  }
}

const renderSubtitle = (subtitle: React.ReactNode) =>
  subtitle
    ? <div className={s.subtitle}>{subtitle}</div>
    : null

const renderLottie = (animationData?: object) =>
  animationData
    ? <Lottie
      className={s.lottie}
      play
      loop={false}
      animationData={animationData}
      speed={1}
    />
    : null
