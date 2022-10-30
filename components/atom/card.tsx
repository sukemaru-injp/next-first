import { ReactNode, FC } from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../../styles/mixin'

interface Props {
  children: ReactNode
}

const CardStyle = styled.div`
box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);
background-color: #fff;
width: 650px;

${mediaQuery('mobile', `
width: 280px;
`)}
`
const LargeCardStyle = styled(CardStyle)`
width: 100%;
`

export const Card: FC<Props> = ({ children }: Props) => {
  return (
    <CardStyle>
      {children}
    </CardStyle>
  )
}

export const LargeCard: FC<Props> = ({ children }: Props) => {
  return (
    <LargeCardStyle>
      {children}
    </LargeCardStyle>
  )
}
