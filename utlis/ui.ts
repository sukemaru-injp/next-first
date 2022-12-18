export const contentInner = [
  '1997/08生まれ',
  'サブスクビジネス向け販売・請求管理SaaS開発において、フロントエンドエンジニアとして従事',
  'React / Typescriptを用いた開発を行っています',
  '2016/04 ~ 国家公務員',
  '2021/07 ~ レンタルオフィス利用予約管理・経費管理Webサービス開発',
  '2022/09 ~ サブスクビジネス向け販売・請求管理SaaS開発',
  '好きなもの: ["サウナ", "旅行", "Typescript", "キャンプ"]'
]

export type WorkDetail = {
  name: string;
  description: string[];
  link: string | null;
  startDate: string | null;
  endDate: string | null;
  tech: string[];
  imagePath: string;
}

export const works: WorkDetail[] = [
  {
    name: '株式会社エイチ',
    description: ['叡知オフィスクラウドというBtoBプロダクトで、コワーキングスペース・会議室の利用予約システム、利用後の経費精算などを一括精算するシステム開発や、社内CS・セールスの利用する社内システム開発など様々なエンドユーザーに向けての開発を経験。', '新規機能開発や新規サービス企画や仕様策定・設計から携わり、コンポーネント設計から開発・テスト・運用まで。', '2021年12月より新プロジェクト「叡知トリップ」の開発携わり、出張先の宿泊施設の利用予約システムのUI/UXの構築、開発を行いました。'],
    link: 'https://eichiii.com/office/',
    startDate: `${new Date(2021, 6, 1)}`,
    endDate: `${new Date(2022, 7, 31)}`,
    tech: ['Vue.js', 'Nuxt.js', 'Scss', 'Golang', 'Docker', 'GCP', 'Typescript'],
    imagePath: '/img/eichi.png'
  },

  {
    name: 'Alp.inc',
    description: ['Scalebase - サブスクリプションビジネスにおける、プライシング設計・商品管理・顧客管理・契約管理・請求管理などを行うSaaS開発。', '主にフロントエンドの開発に従事。React/react-router/Typescript/emotionなど'],
    link: 'https://thealp.co.jp/',
    startDate: `${new Date(2022, 8, 12)}`,
    endDate: null,
    tech: ['React', 'Typescript', 'Emotion', 'Scala',],
    imagePath: '/img/scalebase.png'
  }
]
