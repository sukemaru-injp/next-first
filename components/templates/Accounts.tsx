import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import { FC } from 'react'

const Wrapper = styled.div`
padding: 20px 0;
`

const Title = styled.h3`
font-size: 1.1rem;
color: ${({ theme }) => theme.color.subText};
`

const IconWrapper = styled.div`
display: inline-block;
padding: 5px 10px;
color: ${({ theme }) => theme.color.subText};
&:hover {
  cursor: pointer;
  color: ${({ theme }) => theme.color.main};
}
`

const SubTitle = styled.span`
padding: 0 5px 0 0;
`

interface Props {}

const Accounts: FC<Props> = () => {
  const toGithub = () => {
    window.open('https://github.com/sukemaru-injp', '_blank')
  }
  const toFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=100029782609298', '_blank')
  }
  return (
    <>
      <Wrapper>
        <Title>Get&ensp;in&ensp;Touch</Title>
        <IconWrapper
          onClick={toGithub}>
          <SubTitle>Github</SubTitle><GitHubIcon />
        </IconWrapper>
        <IconWrapper
          onClick={toFacebook}>
          <SubTitle>FaceBook</SubTitle><FacebookIcon />
        </IconWrapper>
      </Wrapper>
    </>
  )
}

export default Accounts
