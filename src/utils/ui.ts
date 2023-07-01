export const profileInner = [
  '1997/08 岡山 生まれ',
  'サブスクビジネス向け販売・請求管理SaaS開発において、フロントエンドエンジニアとして従事',
  'React / Typescriptが好き',
  '2016/04 ~ 国家公務員',
  '2021/07 ~ レンタルオフィス利用予約管理・経費管理Webサービス開発',
  '2022/09 ~ サブスクビジネス向け販売・請求管理SaaS開発',
  '好きなもの: ["サウナ", "旅行", "キャンプ"]',
];

export type WorkDetail = {
  name: string;
  description: string[];
  link: string | null;
  startDate: Date;
  endDate: Date | null;
  tech: string[];
};

export const works: readonly WorkDetail[] = [
  {
    name: '株式会社エイチ',
    description: [
      '叡知オフィスクラウド - BtoBプロダクトで、コワーキングスペース・会議室の利用予約システム、経費精算までワンストップなシステム開発・自社内CS・セールスの利用する社内システム開発などの開発を経験。',
      '2021年12月より新プロジェクト「叡知トリップ」の開発携わり、出張先の宿泊施設の利用予約システムのUI/UXの構築、開発を行う。',
    ],
    link: 'https://eichiii.com/office/',
    startDate: new Date('2021-07-01'),
    endDate: new Date('2022-08-31'),
    tech: ['Vue.js', 'Nuxt.js', 'Scss', 'Golang', 'Docker', 'GCP', 'Typescript'],
  },

  {
    name: 'Alp.inc',
    description: [
      'Scalebase - サブスクリプションビジネスにおける、契約管理・請求管理などを行うBtoB SaaS開発。',
      '主にフロントエンドの開発に従事。',
    ],
    link: 'https://scalebase.com/',
    startDate: new Date('2022-09-12'),
    endDate: null,
    tech: ['React', 'Typescript', 'emotion', 'Scala'],
  },
];
