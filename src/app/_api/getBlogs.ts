import { client } from '@/libs/client';

export const getBlogs = async () => {
  const { contents } = await client.getList({ endpoint: 'blogs' });
  return contents;
};
