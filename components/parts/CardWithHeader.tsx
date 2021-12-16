import { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/constants'
import Card from '../atoms/card'
interface Props {
  title: string
  children: ReactNode
}

const Header = styled.header`
width: 100%;
height: 40PX;
background-color: ${color.sub};
padding: 0 10px; 
`
const Title = styled.h3`
color: #fff;
`

const CardWithHeader: FC<Props> = (props: Props) => {
  return (
    <>
      <Card>
        <Header>
          <Title>{props.title}</Title>
        </Header>
        {props.children}
      </Card>
    </>
  )
}

export default CardWithHeader
