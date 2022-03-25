import type { NextPage, GetStaticProps } from 'next'
import styled from 'styled-components'
import SkillCards, { Skill } from '../../components/templates/SkillCards'
import { map } from 'lodash'
import { client } from '../../libs/client'
import { notion, databaseId, DatabaseResType } from '../../libs/notion'

interface Props {
  skills: Skill[],
  notionRes: DatabaseResType
}

const PageWrapper = styled.div`
padding: 10px;
display: flex;
align-items: center;
flex-flow: column;
`

const SkillPage: NextPage<Props> = ({ skills, notionRes }: Props) => {
  return (
    <>
      <PageWrapper>
        <SkillCards
          uiData={skills}
          data={notionRes.results} />
      </PageWrapper>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // TODO: microCMSを剥がす
  const { contents } = await client.get({ endpoint: 'skills' })
  const skills = map(contents, ({ title, sentence }) => ({
    title,
    sentence: sentence.split('/')
  }))
  const notionRes = await notion.databases.query(
    {
      database_id: databaseId,
      sorts: [
        {
          property: 'sort_num',
          direction: 'ascending',
        }
      ]
    }
  )
  return {
    props: { skills, notionRes }
  }
}

export default SkillPage
