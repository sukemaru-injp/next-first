import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import { color } from '../../styles/constants'

const Wrapper = styled.div`
padding: 20px 0;
`
const Title = styled.h3`
font-size: 1.1rem;
color: ${color.subText}
`

const IconWrapper = styled.div`
display: inline-block;
padding: 5px 10px;
color: ${color.subText};
&:hover {
  cursor: pointer;
  color: ${color.main};
}
`

const SubTitle = styled.span`
padding: 0 5px 0 0;
`

const Accounts = () => {
  return (
    <>
      <Wrapper>
        <Title>Get&ensp;in&ensp;Touch</Title>
        <IconWrapper>
          <SubTitle>Github</SubTitle><GitHubIcon />
        </IconWrapper>
        <IconWrapper>
          <SubTitle>FaceBook</SubTitle><FacebookIcon />
        </IconWrapper>
      </Wrapper>
    </>
  )
}

export default Accounts
