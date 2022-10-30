import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/constants' 

type SizeType = 'small' | 'middle' | 'large'
type Level = 1 | 2 | 3 | 4 | 5 | 6
type ColorType = 'main' | 'subText'

interface Props {
  size?: SizeType
  level?: Level
  color?: ColorType
  children: ReactNode
}

const textSize = {
  small: '1.2rem',
  middle: '1.5rem',
  large: '1.8rem'
} as const

const tagLevel = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
} as const

const getSize = (size: SizeType) => textSize[size]

const getTag = (level: Level) => tagLevel[level]

const Heading: FC<Props> = ({ size = 'middle', level = 1, color = 'main', children }) => {
  const tag = getTag(level)
  const fontSize = getSize(size)

  return (
    <HeadingStyle
      size={fontSize}
      color={color}
      as={tag}>
      {children}
    </HeadingStyle>
  )
}

const HeadingStyle = styled.h1<{ size: string, color: ColorType }>`
font-size: ${({ size }) => `${size}`};
color: ${({ color: colorType }) => `${color()[colorType]}`};
`

export default Heading
