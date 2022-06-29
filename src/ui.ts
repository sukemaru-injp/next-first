import { format, differenceInYears } from 'date-fns'
import { workUi } from '../pages/works'

interface button {
  title: string,
  to: string
}

const age = differenceInYears(new Date(), new Date(1997, 7, 21))
export const contentInner = [`Ryosuke Kubotaのページです。平成9年8月21日生まれ、${age}歳です。`, '趣味は旅行、サウナ、美味しいものを食べることです。', '現在はtoBの自社開発でフロントエンドエンジニアとして設計や開発に従事。', '前職は国立印刷局にて公務員として勤務、独学でサービス開発を学んだ後、', '現在の会社にジョイン。', '日々の仕事に勤しみながら、技術力を磨き中です。']

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
    content: ['叡知オフィスクラウドというBtoBプロダクトで、コワークングスペース・会議室の利用予約システム、利用後の経費精算などを一括精算するシステムなどの開発や、社内CS・セールスの利用する社内システム開発など様々なエンドユーザーに向けての開発を経験。', '新規機能開発や新規サービス企画や仕様決定・設計から携わり、コンポーネント設計から開発・テスト・運用まで行ってきました。', '2021年12月より新プロジェクト「叡知トリップ」の開発携わり、出張先の宿泊施設の利用予約システムのUI/UXの構築、開発を行いました。', 'コーディング規約の策定や、採用面接なども経験させていただきました。'],
    tech: 'Vue.js/Nuxt.js/SCSS/Golang/Docker/GCP/TypeScript/'
  }
]
