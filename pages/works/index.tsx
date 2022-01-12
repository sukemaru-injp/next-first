import styled from 'styled-components'
import WorkCard from '../../components/templates/WorkCard'
import type { NextPage, GetStaticProps } from 'next'
import { map, cloneDeep } from 'lodash'
import { workDetails } from '../../src/ui'
import Accounts from '../../components/templates/Accounts'

export interface workUi {
  title: string
  image: string
  content: string[]
  link?: string
  date?: string
}

interface Props {
  contents: workUi[]
}

const PageWrapper = styled.div`
display: flex;
align-items: center;
flex-flow: column;
`

const CardWrapper = styled.div`
margin: 40px 0;
`

const Works: NextPage<Props> = (props: Props) => {
  return (
    <>
      <PageWrapper>
        {map(props.contents, (item, idx) => {
          return <CardWrapper key={`item${idx}`}>
            <WorkCard
              title={item.title}
              image={item.image}
              content={item.content}
              link={item.link || ''}
              date={item?.date || ''} />
          </CardWrapper> 
        })}
        <Accounts />
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
