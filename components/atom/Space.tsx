import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type SizeType = 'none' | 'small' | 'middle' | 'large'

interface SpaceProps {
  size: SizeType | SizeType[]
  children: ReactNode
}

interface MarginProps {
  top?: number,
  right?: number,
  bottom?: number,
  left?: number
}

const Div = styled.div<MarginProps>`
  margin-top: ${({ top = 0 }) => `${top}px`};
  margin-left: ${({ right = 0 }) => `${right}px`};
  margin-bottom: ${({ bottom = 0 }) => `${bottom}px`};
  margin-left: ${({ left = 0 }) => `${left}px`};
`

const spaceSize = {
  none: 0,
  small: 8,
  middle: 16,
  large: 24,
} as const

const getNumberSize = (size: SizeType) => {
  return typeof size === 'string' ? spaceSize[size] : size || 0
}

const makeMarginProps = (size: SizeType | SizeType[]): MarginProps => {
  let lastVal: MarginProps = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
  if (Array.isArray(size)) {
    const take = size.slice(0, 4)
    switch (take.length) {
    case 1:
      lastVal = {
        top: getNumberSize(take[0]),
        right: getNumberSize(take[0]),
        bottom: getNumberSize(take[0]),
        left: getNumberSize(take[0])    
      }
      break
    case 2:
      lastVal = {
        top: getNumberSize(take[0]),
        right: getNumberSize(take[1]),
        bottom: getNumberSize(take[0]),
        left: getNumberSize(take[1])    
      }
      break
    case 3:
      lastVal = {
        top: getNumberSize(take[0]),
        right: getNumberSize(take[1]),
        bottom: getNumberSize(take[2]),
        left: getNumberSize(take[1])    
      }
      break
    case 4:
      lastVal = {
        top: getNumberSize(take[0]),
        right: getNumberSize(take[1]),
        bottom: getNumberSize(take[2]),
        left: getNumberSize(take[3])    
      }
      break
    default:
      lastVal = { ...lastVal }
    }
  }
  if (typeof size === 'string') {
    lastVal = {
      top: getNumberSize(size),
      right: getNumberSize(size),
      bottom: getNumberSize(size),
      left: getNumberSize(size)    
    }
  }
  return lastVal
}

const Space: FC<SpaceProps> = ({ size, children }) => {
  const marginProps = makeMarginProps(size)

  return (
    <Div {...marginProps}>
      {children}
    </Div>
  )
}

export default Space
