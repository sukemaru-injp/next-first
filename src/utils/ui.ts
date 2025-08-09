export const profileInner = [
	'1997/08 岡山 生まれ',
	'サブスクビジネス向け販売・請求・債権管理SaaS開発において、エンジニアとして従事',
	'React/Typescriptが好き, 関数型プログラミング的なアプローチが好き',
	'2016/04 ~ 国家公務員',
	'2021/07 ~ レンタルオフィス利用予約管理・経費管理Webサービス開発',
	'2022/09 ~ サブスクビジネス向け販売・請求管理SaaS開発',
	'好き: ["サウナ", "旅行", "キャンプ", "あいみょん"]'
];

export type WorkDetail = {
	name: string;
	description: string[];
	link: string | null;
	startDate: Date;
	endDate: Date | null;
};

export const works: readonly WorkDetail[] = [
	{
		name: '株式会社エイチ',
		description: [
			'叡知オフィスクラウド: コワーキングスペース・会議室の利用予約システム、経費精算までワンストップなシステム開発・自社内CS・セールスの利用する社内システム開発などの開発を経験。'
		],
		link: 'https://eichiii.com/office/',
		startDate: new Date('2021-07-01'),
		endDate: new Date('2022-08-31')
	},
	{
		name: 'Alp.inc',
		description: [
			'Scalebase - サブスクリプションビジネスにおける、契約管理・請求管理などを行うBtoB SaaS開発。',
			'2024/05より、2023年リリースの請求書/債権管理サービスScalebaseペイメントの開発に従事してます。',
			'',
			'Next.js/Scala/PlayFrameworkでFE/BE開発してます。'
		],
		link: 'https://scalebase.com/',
		startDate: new Date('2022-09-12'),
		endDate: new Date('2025-08-31')
	},
	{
		name: 'TerraDrone株式会社(副業)',
		description: [
			'測量データのデータ管理・分析クラウドであるTerraCloudの開発に従事。主にUI/UXの改善を行う'
		],
		link: 'https://terra-drone.net/',
		startDate: new Date('2024-04-01'),
		endDate: new Date('2024-06-30')
	}
];
