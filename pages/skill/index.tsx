import type { NextPage, GetStaticProps } from 'next'
import styled from 'styled-components'
import SkillCards, { Skill } from '../../components/templates/SkillCards'
import Heading from '../../components/atom/Heading'
import { map } from 'lodash'
import { client } from '../../libs/client'
import { mediaQuery } from '../../styles/mixin'

interface Props {
  skills: Skill[],
}

const PageWrapper = styled.div`
padding: 40px;

${mediaQuery('mobile', `
  padding: 20px;
`)}

/* padding: 10px;
display: flex;
align-items: center;
flex-flow: column; */
`

const SkillPage: NextPage<Props> = ({ skills }: Props) => {
  return (
    <>
      <PageWrapper>
        <Heading size="large">Skills</Heading>
        <SkillCards
          uiData={skills} />
      </PageWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { contents } = await client.get({ endpoint: 'skills' })
  const skills = map(contents, ({ title, sentence }) => ({
    title,
    sentence: sentence.split('/')
  }))
  return {
    props: { skills }
  }
}

export default SkillPage
