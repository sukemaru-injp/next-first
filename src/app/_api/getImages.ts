import { client } from '@/libs/client';

export type ImageDetail = {
	label: string;
	image: {
		url: string;
		height: number;
		width: number;
	};
};

export const getImages = async () => {
	const { contents } = await client.getList<ImageDetail>({
		endpoint: 'profile'
	});
	return contents;
};
