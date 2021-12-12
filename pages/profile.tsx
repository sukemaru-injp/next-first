import type { NextPage } from 'next'
import styled from 'styled-components'
import Image from 'next/image'
import { contextInner } from '../src/ui'
import Accounts from '../components/templates/Accounts'

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 100vh;
`

const Sentence = styled.p`
line-height: 1.2rem;
font-size: 1.2rem;
`

const ContentWrapper = styled.div`
width: 50vw;
padding: 10px;
`
const ImageWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;

& > span {
  border-radius: 50%;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.3;
    z-index: 10;
  }    
}
`

const Home: NextPage = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <ImageWrapper>
            <Image
              className="image"
              src="/img/profile.png"
              alt="profile"
              width={400}
              height={400}
              objectFit="cover" />
          </ImageWrapper>
        </ContentWrapper>
        <ContentWrapper>
          {contextInner.map((item, idx) => 
            <Sentence key={`context${idx}`}>{item}</Sentence>
          )}
          <Accounts />
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export default Home
