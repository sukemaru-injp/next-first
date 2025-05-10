import { client } from '@/libs/client';
import type { Blog } from '../_types/Blog';

export const getBlogs = async () => {
	const { contents } = await client.getList<Blog>({ endpoint: 'blogs' });

	return contents;
};
