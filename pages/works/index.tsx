import styled from 'styled-components'
import WorkCard from '../../components/templates/WorkCard'
import type { NextPage } from 'next'
import { map } from 'lodash'

interface workUi {
  title: string
  image: string
  content: string[]
}

const workUi: workUi[] = [
  {
    title: '叡知オフィスクラウド',
    image: '/img/eichi.png',
    content: ['叡知オフィスクラウドというtoBサービスでチャットボットの開発、', 'ユーザー画面開発、社内システムの開発に従事しました。', '主にフロントエンドエンジニアとして、Nuxt.jsを用いて開発していました。', '新規機能開発の企画や設計から携わりスタートアップのスピード感での開発を経験。', 'ユーザービリティを考慮した画面開発で、サービス規模はユーザー数〇〇人のサービス開発。']
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
