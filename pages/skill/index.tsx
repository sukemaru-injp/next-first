import type { NextPage } from 'next'
import styled from 'styled-components'
import SkillCards from '../../components/templates/SkillCards'

const PageWrapper = styled.div`
padding: 10px;
display: flex;
align-items: center;
flex-flow: column;
`

const Skill: NextPage = () => {
  return (
    <>
      <PageWrapper>
        <SkillCards />
      </PageWrapper>
    </>
  )
}

export default Skill
