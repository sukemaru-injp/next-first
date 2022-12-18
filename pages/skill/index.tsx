import type { NextPage, GetStaticProps } from 'next'
import SkillCards, { Skill } from '../../components/templates/SkillCards'
import Heading from '../../components/atom/Heading'
import { map } from 'lodash'
import { client } from '../../libs/client'
import { Page } from '../../components/atom/Page'

interface Props {
  skills: Skill[],
}

const SkillPage: NextPage<Props> = ({ skills }: Props) => {
  return (
    <>
      <Page>
        <Heading size="large">Skills</Heading>
        <SkillCards
          uiData={skills} />
      </Page>
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
