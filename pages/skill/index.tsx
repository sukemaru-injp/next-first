import type { NextPage } from 'next'
import styled from 'styled-components'
import CardWithTitle from '../../components/parts/CardWithTitle'

const PageWrapper = styled.div`
padding: 10px;
display: flex;
align-items: center;
flex-flow: column;
`

const InnerWrapper = styled.div`
padding: 20px;
`

const Content = styled.p`
line-height: 1.2rem;
font-size: 1.1rem;
padding: 5px 10px;
`
const Skill: NextPage = () => {
  return (
    <>
      <PageWrapper>
        <InnerWrapper>
          <CardWithTitle
            title="HTML">
            <Content>
            アクセシビティを意識したマークアップ。
            </Content>
          </CardWithTitle>
        </InnerWrapper>
      </PageWrapper>
    </>
  )
}

export default Skill
