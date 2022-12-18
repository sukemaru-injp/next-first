import styled from 'styled-components'
import type { NextPage, GetStaticProps } from 'next'
import { cloneDeep } from 'lodash'
import { works, WorkDetail } from '../../utlis/ui'
import Accounts from '../../components/templates/Accounts'
import { fadeIn } from '../../styles/mixin'
import DateRange from '../../components/parts/DateRange'
import Heading from '../../components/atom/Heading'
import WordCard from '../../components/parts/WorkCard'
import { mediaQuery } from '../../styles/mixin'
import { Page } from '../../components/atom/Page'

interface Props {
  contents: WorkDetail[]
}

const Content = styled.div`
margin: 30px 0;
display: flex;
`

const HistoryWrapper = styled.div`
  display: flex;
  gap: 20px;

  ${mediaQuery('mobile', `
  flex-direction: column;
  `)}
`

const Works: NextPage<Props> = ({ contents }) => {
  return (
    <>
      <Page>
        <Heading size="large">
          Works
        </Heading>
        {contents.map((item, i) => {
          return (
            <Content key={`content${i}`}>
              <HistoryWrapper>
                <DateRange start={item.startDate} end={item.endDate} />

                <WordCard
                  name={item.name}
                  description={item.description}
                  imagePath={item.imagePath}
                />
              </HistoryWrapper>
            </Content>
          )
        })}
        <Accounts />
      </Page>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const contents = cloneDeep(works)
  return {
    props: { contents }
  }
}

export default Works
