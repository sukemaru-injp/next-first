import styled from 'styled-components'
import { color } from '../../styles/constants'

const Footer = styled.footer`
width: 100%;
height: 40px;
text-align: center;
background-color: ${color.sub};
color: ${color.subText};
`

const Content = styled.p`
line-height: 1.1rem;
font-size: 1.1rem;
padding: 10px;
`
interface Props {}

const DefaultFooter = () => {
  return (
    <Footer>
      <Content>© sukemaru</Content>
    </Footer>
  )
}

export default DefaultFooter
