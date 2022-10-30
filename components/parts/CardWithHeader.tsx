import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { LargeCard } from '../atom/card'
interface Props {
  title: string
  children: ReactNode
}

const Header = styled.header`
width: 100%;
height: 60PX;
background-color: ${({ theme }) => theme.color.cardHeader};
padding: 20px 15px; 
`
const Title = styled.h3`
color: #fff;
font-weight: bold;
`

const CardWithHeader: FC<Props> = (props: Props) => {
  return (
    <>
      <LargeCard>
        <Header>
          <Title>{props.title}</Title>
        </Header>
        {props.children}
      </LargeCard>
    </>
  )
}

export default CardWithHeader
