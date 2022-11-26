import { format } from 'date-fns'
import { workUi } from '../pages/works'

export const contentInner = [
  '1997/08生まれ',
  'サブスクビジネス向け販売・請求管理SaaS開発において、フロントエンドエンジニアとして従事',
  'React / Typescriptを用いた開発を行っています',
  '2016/04 ~ 国家公務員',
  '2021/07 ~ レンタルオフィス利用予約管理・経費管理Webサービス開発',
  '2022/09 ~ サブスクビジネス向け販売・請求管理SaaS開発',
  '好きなもの: ["サウナ", "旅行", "Typescript", "キャンプ"]'
]

export const workDetails: workUi[] = [
  {
    title: '株式会社エイチ',
    image: '/img/eichi.png',
    link: 'https://eichiii.com/office/',
    startDate: format(new Date(2021, 6, 1), 'yyyy/MM/dd'),
    endDate: format(new Date(2022, 7, 31), 'yyyy/MM/dd'),
    content: ['叡知オフィスクラウドというBtoBプロダクトで、コワーキングスペース・会議室の利用予約システム、利用後の経費精算などを一括精算するシステムなどの開発や、社内CS・セールスの利用する社内システム開発など様々なエンドユーザーに向けての開発を経験。', '新規機能開発や新規サービス企画や仕様策定・設計から携わり、コンポーネント設計から開発・テスト・運用まで行ってきました。', '2021年12月より新プロジェクト「叡知トリップ」の開発携わり、出張先の宿泊施設の利用予約システムのUI/UXの構築、開発を行いました。', 'エンジニアの採用面接なども関わりました。'],
    tech: 'Vue.js/Nuxt.js/SCSS/Golang/Docker/GCP/TypeScript/'
  }
]