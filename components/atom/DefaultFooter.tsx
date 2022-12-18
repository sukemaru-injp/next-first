import styled, { css } from 'styled-components'
import { getYear } from 'date-fns'
import { FC } from 'react'

interface Props {}

const FooterStyle = styled.footer`
${({ theme }) => {
    return css`
      width: 100%;
      height: 50px;
      background-color: ${theme.color.sub};
      color: ${theme.color.subText};
      display: flex;
      align-items: center;
      justify-content: center;
  `
  }}
`

const Content = styled.p`
line-height: 1.1rem;
font-size: 1.1rem;
padding: 10px;
`

const Footer: FC<Props> = () => {
  return (
    <FooterStyle>
      <Content>&copy; {getYear(new Date())} - sukemaru</Content>
    </FooterStyle>
  )
}

export default Footer
