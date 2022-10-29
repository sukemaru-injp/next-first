import type { NextPage, GetStaticProps } from 'next'
import styled from 'styled-components'
import Image from 'next/image'
import { contentInner } from '../../src/ui'
import Accounts from '../../components/templates/Accounts'
import { mediaQuery, fadeIn } from '../../styles/mixin'
import { cloneDeep } from 'lodash'

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 40px 0;

${mediaQuery('mobile', `
flex-flow: column
`)}
`

const Sentence = styled.p`
line-height: 1.2;
font-size: 1.2rem;
`

const ContentWrapper = styled.div`
padding: 10px;
animation-name: ${fadeIn};
animation-duration: 1s;

${mediaQuery('mobile', `
padding: 20px 10px;
`)}
`

const ImageWrapper = styled.div`
position: relative;
display: flex;
justify-content: center;
`

const ImageStyle = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.2;
    z-index: 10;
  }
`
interface Props {
  contents: string[]
}

const Profile: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <ImageWrapper>
            <ImageStyle
              className="image"
              src="/img/profile.png"
              alt="profile"
              width={400}
              height={400} />
          </ImageWrapper>
        </ContentWrapper>
        <ContentWrapper>
          {props.contents.map((item, idx) => 
            <Sentence key={`context${idx}`}>{item}</Sentence>
          )}
          <Accounts />
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const contents = cloneDeep(contentInner)
  return {
    props: { contents }
  }
}

export default Profile
