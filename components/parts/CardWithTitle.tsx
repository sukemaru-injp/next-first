import styled from 'styled-components'
import Card from '../atoms/card'
import { FC, ReactNode } from 'react'  
import { color } from '../../styles/constants'

const Title = styled.h2`
color: ${color.subText};
padding: 0 0 5px 0;
`

interface Props {
  title: string
  children: ReactNode
}

const CardWithTitle: FC<Props> = (props: Props) => {
  return (
    <>
      <Card>
        <Title>
          {props.title}
        </Title>
        <hr />
        {props.children}
      </Card>
    </>
  )
}

export default CardWithTitle