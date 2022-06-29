import styled from 'styled-components'

const Footer = styled.footer`
width: 100%;
height: 40px;
text-align: center;
${({ theme }) => `
  background-color: ${theme.color.sub};
  color: ${theme.color.subText};
  `}
`

const Content = styled.p`
line-height: 1.1rem;
font-size: 1.1rem;
padding: 10px;
`

const DefaultFooter = () => {
  return (
    <Footer>
      <Content>© 2022 - sukemaru</Content>
    </Footer>
  )
}

export default DefaultFooter
