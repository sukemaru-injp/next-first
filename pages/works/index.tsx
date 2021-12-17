import styled from 'styled-components'
import WorkCard from '../../components/templates/WorkCard'
import type { NextPage } from 'next'
import { map } from 'lodash'

interface workUi {
  title: string
  image: string
  content: string[]
  link?: string
  date?: string
}

const workUi: workUi[] = [
  {
    title: '叡知オフィスクラウド',
    image: '/img/eichi.png',
    content: ['叡知オフィスクラウドというBtoBサービスでチャットボットの開発、', 'ユーザー画面開発、社内システムの開発に従事しました。', '主にフロントエンドエンジニアとして、Nuxt.jsを用いて開発していました。', '新規機能開発や新規のサービスの企画や設計から携わり、コンポーネント設計から開発・テスト・運用までをおこなってきました。']
  }
]

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
        {map(workUi, (item, idx) => {
          return <CardWrapper key={`item${idx}`}>
            <WorkCard
              title={item.title}
              image={item.image}
              content={item.content} />
          </CardWrapper> 
        })}
      </PageWrapper>
    </>
  )
}

export default Works
