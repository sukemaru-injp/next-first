import styled from 'styled-components'
import CardWithHeader from '../parts/CardWithHeader'
import Image from 'next/image'
import { FC } from 'react'
import { map } from 'lodash'

interface Props {
  image: string
  title: string
  content: string[]
  link?: string
  date?: string
  imageHeight?: string
  imageWidth?: string
}

const Content = styled.p`
line-height: 1.1rem;
font-size: 1.1rem;
padding: 2px;
`
const ImageWrapper = styled.div`
& > span {
border-radius: 5px;
}
`

const InnerWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const ContentWrapper = styled.div`
padding: 10px 20px;
`

const WorkCard: FC<Props> = (props: Props) => {
  const DateText = () => {
    if (props?.date) {
      return <Content>{props.date}&ensp;〜</Content>
    } else {
      return <></>
    }
  }
  const Url = () => {
    if (props?.link) {
      return <Content>URL:&ensp;<a href={props.link} target="_blank" rel="noreferrer" >{props.link}</a></Content>
    } else {
      return <></>
    }
  }

  return (
    <>
      <CardWithHeader
        title={props.title}>
        <InnerWrapper>
          <ImageWrapper>
            <Image
              src={`${props.image}`}
              alt="profile"
              width={props?.imageWidth || 480 }
              height={props?.imageHeight || 350}
              objectFit="cover" />              
          </ImageWrapper>
          <ContentWrapper>
            <DateText />
            {map(props.content, (v, idx) => {
              return <Content key={`content${idx}`}>{v}</Content>
            })}
            <Url />
          </ContentWrapper>
        </InnerWrapper>
      </CardWithHeader>
    </>
  )
}
export default WorkCard
