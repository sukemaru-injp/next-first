import { Skill } from '../components/templates/SkillCards'
import { format } from 'date-fns'
import { workUi } from '../pages/works'

export const contextInner = ['Ryosuke Kubotaのページです。平成9年8月21日生まれ、24歳です。', '旅行と美味しいものを食べることを楽しみに生きています。', '現在はtoBの自社開発でフロントエンドエンジニアとして設計や開発に従事。', '前職は国立印刷局にて公務員として勤務、独学でサービス開発を学んだ後、', '現在の会社にジョイン。', '日々の仕事に勤しみながら、技術力を磨き中です。']

export const buttonUi = [
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
export const skillInner: Skill[] = [
  {
    title: 'JavaScript',
    sentence: ['EcmaScript2015以降', '実務における経験はVue.jsにおいてv2,v3でのNuxt.jsでの開発。', '個人開発では主に、React,Next.js,Typescriptを使用して開発しています。']
  },
  {
    title: 'CSS3',
    sentence: ['コンポーネント志向なCSS設計', '業務ではSCSS、個人開発ではCSSinJSを主に使っています。']
  },
  {
    title: 'HTML5',
    sentence: ['アクセシビリティを考慮したマークアップ。']
  },
  {
    title: 'Github',
    sentence: ['チーム開発でのソースコードの管理。']
  }
]

export const workDetails: workUi[] = [
  {
    title: '叡知オフィスクラウド',
    image: '/img/eichi.png',
    link: 'https://eichiii.com/office/',
    date: format(new Date(2021, 6, 1), 'yyyy/MM/dd'),
    content: ['叡知オフィスクラウドというBtoBサービスでチャットボットの開発、ユーザー画面開発、社内システムの開発に従事しました。', '主にフロントエンドエンジニアとして、Nuxt.jsを用いて開発していました。', '新規機能開発や新規のサービスの企画や使用決定・設計から携わり、コンポーネント設計から開発・テスト・運用まで行ってきました。']
  }
]
