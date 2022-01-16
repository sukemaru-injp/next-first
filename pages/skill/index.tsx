import type { NextPage, GetStaticProps } from 'next'
import styled from 'styled-components'
import SkillCards, { Skill } from '../../components/templates/SkillCards'
import { skillInner } from '../../src/ui'
import { cloneDeep } from 'lodash'

interface Props {
  skills: Skill[]
}

const PageWrapper = styled.div`
padding: 10px;
display: flex;
align-items: center;
flex-flow: column;
`

const SkillPage: NextPage<Props> = ({ skills }: Props) => {
  return (
    <>
      <PageWrapper>
        <SkillCards
          uiData={skills} />
      </PageWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const skills = cloneDeep(skillInner)
  return {
    props: { skills }
  }
}

export default SkillPage
