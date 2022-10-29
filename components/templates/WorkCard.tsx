import styled from 'styled-components'
import CardWithHeader from '../parts/CardWithHeader'
import Image from 'next/image'
import { FC } from 'react'
import { map } from 'lodash'
import { mediaQuery } from '../../styles/mixin'
interface Props {
  image: string
  title: string
  content: string[]
  link?: string
  startDate?: string
  endDate?: string
  tech?: string
}

const Content = styled.p`
line-height: 1.2;
padding: 5px;
overflow-wrap: break-word;
`
const ImageWrapper = styled.div`
& > span {
border-radius: 5px;
}
`

const ImageStyle = styled(Image)`
object-fit: cover;
`

const SubContent = styled.p`
color: ${({ theme }) => theme.color.subText};
padding: 5px;
overflow-wrap: break-word;
`

const InnerWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
${mediaQuery('mobile', `
flex-flow: column
`)}
`
const ContentWrapper = styled.div`
padding: 10px 20px;
max-width: 100%;
${mediaQuery('mobile', `
padding: 10px 5px;
`)}
`

const Anchor = styled.a`
color: ${({ theme }) => theme.color.main};
`

const WorkCard: FC<Props> = (props: Props) => {
  const DateText = () => {
    if (props.startDate && props.endDate) {
      return <SubContent>{props.startDate}&ensp;〜&ensp;{props.endDate}</SubContent>
    }
    if (props?.startDate) {
      return <SubContent>{props.startDate}&ensp;〜</SubContent>
    } else {
      return <></>
    }
  }
  const Url = () => {
    if (props?.link) {
      return <SubContent>URL:&ensp;<Anchor href={props.link} target="_blank" rel="noreferrer" >{props.link}</Anchor></SubContent>
    } else {
      return <></>
    }
  }

  const TechInfo: FC = () => {
    if (props?.tech) {
      return <SubContent>使用技術:&ensp;{props.tech}</SubContent>
    }
    return <></>
  }

  return (
    <>
      <CardWithHeader
        title={props.title}>
        <InnerWrapper>
          <ImageWrapper>
            <ImageStyle
              src={`${props.image}`}
              alt="profile"
              width={400}
              height={350} />              
          </ImageWrapper>
          <ContentWrapper>
            <DateText />
            {map(props.content, (v, idx) => {
              return <Content key={`content${idx}`}>{v}</Content>
            })}
            <Url />
            <TechInfo />
          </ContentWrapper>
        </InnerWrapper>
      </CardWithHeader>
    </>
  )
}

export default WorkCard
