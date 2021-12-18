import styled from 'styled-components'
import WorkCard from '../../components/templates/WorkCard'
import type { NextPage } from 'next'
import { map } from 'lodash'
import { workDetails } from '../../src/ui'

export interface workUi {
  title: string
  image: string
  content: string[]
  link?: string
  date?: string
}

const PageWrapper = styled.div`
display: flex;
align-items: center;
flex-flow: column;
`

const CardWrapper = styled.div`
margin: 40px 0;
`

const Works: NextPage = () => {
  return (
    <>
      <PageWrapper>
        {map(workDetails, (item, idx) => {
          return <CardWrapper key={`item${idx}`}>
            <WorkCard
              title={item.title}
              image={item.image}
              content={item.content}
              link={item.link || ''}
              date={item?.date || ''} />
          </CardWrapper> 
        })}
      </PageWrapper>
    </>
  )
}

export default Works
