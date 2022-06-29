import styled from 'styled-components'
import WorkCard from '../../components/templates/WorkCard'
import type { NextPage, GetStaticProps } from 'next'
import { map, cloneDeep } from 'lodash'
import { workDetails } from '../../src/ui'
import Accounts from '../../components/templates/Accounts'
import { fadeIn } from '../../styles/mixin'

export interface workUi {
  title: string
  image: string
  content: string[]
  link?: string
  date?: string,
  tech?: string
}

interface Props {
  contents: workUi[]
}

const PageWrapper = styled.div`
padding: 30px 0;
animation-name: ${fadeIn};
animation-duration: 1s;
`

const ContentWrapper = styled.div`
display: flex;
align-items: center;
flex-flow: column;
`

const CardWrapper = styled.div`
margin: 40px 0;
`

const Title = styled.h2`
color: ${({ theme }) => theme.color.main};
font-weight: bold;
text-align: center;
font-size: 1.2rem;
`

const Works: NextPage<Props> = (props: Props) => {
  return (
    <>
      <PageWrapper>
        <Title>
          My Works
        </Title>
        <ContentWrapper>
          {map(props.contents, (item, idx) => {
            return <CardWrapper key={`item${idx}`}>
              <WorkCard
                title={item.title}
                image={item.image}
                content={item.content}
                link={item?.link || ''}
                tech={item?.tech || ''}
                date={item?.date || ''} />
            </CardWrapper> 
          })}
          <Accounts />
        </ContentWrapper>
      </PageWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const contents = cloneDeep(workDetails)
  return {
    props: { contents }
  }
}

export default Works
