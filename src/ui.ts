import { format, differenceInYears } from 'date-fns'
import { workUi } from '../pages/works'

interface button {
  title: string,
  to: string
}

const age = differenceInYears(new Date(), new Date(1997, 7, 21))
export const contentInner = [`Ryosuke Kubotaのページです。平成9年8月21日生まれ、${age}歳です。`, '旅行と美味しいものを食べることを楽しみに生きています。', '現在はtoBの自社開発でフロントエンドエンジニアとして設計や開発に従事。', '前職は国立印刷局にて公務員として勤務、独学でサービス開発を学んだ後、', '現在の会社にジョイン。', '日々の仕事に勤しみながら、技術力を磨き中です。']

export const buttonUi: button[] = [
  {
    title: 'Profile',
    to: '/profile'
  },
  {
    title: 'Skill',
    to: '/skill'
  },
  {
    title: 'Works',
    to: '/works'
  }
]

export const workDetails: workUi[] = [
  {
    title: '叡知オフィスクラウド',
    image: '/img/eichi.png',
    link: 'https://eichiii.com/office/',
    date: format(new Date(2021, 6, 1), 'yyyy/MM/dd'),
    content: ['叡知オフィスクラウドというBtoBサービスでチャットボットの開発、ユーザー画面開発、社内システムの開発に従事しました。', '主にフロントエンドエンジニアとして、Nuxt.jsを用いて開発していました。', '新規機能開発や新規サービス企画や仕様決定・設計から携わり、コンポーネント設計から開発・テスト・運用まで行ってきました。']
  }
]
