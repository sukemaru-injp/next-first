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
  return (
    <>
      <CardWithHeader
        title={props.title}>
        <InnerWrapper>
          <ImageWrapper>
            <Image
              src={`${props.image}`}
              alt="profile"
              width={480}
              height={350}
              objectFit="cover" />              
          </ImageWrapper>
          <ContentWrapper>
            {map(props.content, (v, idx) => {
              return <Content key={`content${idx}`}>{v}</Content>
            })}
          </ContentWrapper>
        </InnerWrapper>
      </CardWithHeader>
    </>
  )
}
export default WorkCard
