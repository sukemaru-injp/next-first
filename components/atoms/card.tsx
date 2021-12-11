import { ReactNode, FC } from 'react'
import styled from 'styled-components'
import { color } from '../../styles/constants'

interface Props {
  children: ReactNode
}

const CardStyle = styled.div`
box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.4);
background-color: #fff;
padding: 20px;
width: 650px;
`

const Card: FC<Props> = ({ children }: Props) => {
  return (
    <CardStyle>
      {children}
    </CardStyle>
  )
}

export default Card
