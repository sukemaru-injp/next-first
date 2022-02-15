import styled from 'styled-components'
import { Card } from '../atoms/card'
import { FC, ReactNode } from 'react'  
import { color } from '../../styles/constants'

const Title = styled.h2`
color: ${color.subText};
font-weight: bold;
padding: 0 0 15px 0;
`

const InnerWrapper = styled.div`
padding: 20px
`

const Hr = styled.hr`
color: #ddd;
`

interface Props {
  title: string
  children: ReactNode
}

const CardWithTitle: FC<Props> = (props: Props) => {
  return (
    <>
      <Card>
        <InnerWrapper>
          <Title>
            {props.title}
          </Title>
          <Hr />
          {props.children}
        </InnerWrapper>
      </Card>
    </>
  )
}

export default CardWithTitle