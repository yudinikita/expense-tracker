import React from 'react'
import { default as LottiePlayer } from 'react-lottie-player/dist/LottiePlayerLight'
import { AnimationConfig, AnimationDirection, AnimationEventCallback, AnimationSegment } from 'lottie-web'

type LottieProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement> &
  Pick<AnimationConfig, 'loop' | 'renderer' | 'rendererSettings' | 'audioFactory'> & {
  play?: boolean
  goTo?: number
  speed?: number
  direction?: AnimationDirection
  segments?: AnimationSegment | AnimationSegment[]

  onComplete?: AnimationEventCallback
  onLoopComplete?: AnimationEventCallback
  onEnterFrame?: AnimationEventCallback
  onSegmentStart?: AnimationEventCallback
} & ({ path?: string } | { animationData?: object })

/**
 * Fully declarative React Lottie player
 *
 * Using react-lottie-player
 */
export const Lottie: React.FC<LottieProps> = (props) => {
  return (
    <LottiePlayer
      {...props}
    />
  )
}
