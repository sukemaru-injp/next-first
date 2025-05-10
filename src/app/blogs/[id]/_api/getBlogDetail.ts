import type { Blog } from '@/app/_types/Blog';
import { client } from '@/libs/client';

export const getBlogDetail = async (params: { id: string }) => {
	try {
		const res = await client.getListDetail<Blog>({
			endpoint: 'blogs',
			contentId: params.id
		});
		return res;
	} catch (_e) {
		return undefined;
	}
};
