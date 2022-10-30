import type { NextPage, GetStaticProps } from 'next'
import styled from 'styled-components'
import { contentInner } from '../../utlis/ui'
import { mediaQuery } from '../../styles/mixin'
import { cloneDeep } from 'lodash'
import Heading from '../../components/atom/Heading'
import Space from '../../components/atom/Space'
import Image from 'next/image'
import Accounts from '../../components/templates/Accounts'

interface Props {
  contents: string[]
}

const Profile: NextPage<Props> = ({ contents }) => {
  return (
    <>
      <Wrapper>
        <Heading size="large">Profile プロフィール</Heading>
        <MainWrapper>
          <Space size={['large', 'none']}>
            <Heading size="middle" color="subText">Ryosuke Kubota</Heading>
            <Ul>
              {contents.map((val, i) => {
                return (
                  <Li key={`${i}`}>
                    {val}
                  </Li>
                )
              })}
            </Ul>
          </Space>

          <Space size={['large', 'none']}>
            <ImageStyle
              src="/img/profile.png"
              alt="profile"
              width={250}
              height={250} />

            <Accounts />
          </Space>
        </MainWrapper>
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

const Wrapper = styled.div`
padding: 40px;

${mediaQuery('mobile', `
  padding: 20px;
`)}
`

const Ul = styled.ul`
padding: 10px;
`

const Li = styled.li`
padding: 10px;
color: ${({ theme }) => theme.color.subText};
list-style-type: circle;
`

const MainWrapper = styled.div`
display: flex;
${mediaQuery('mobile', `
flex-flow: column
`)}
`
const ImageStyle = styled(Image)`
  border-radius: 10px;
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