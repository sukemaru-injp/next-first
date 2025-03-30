import type { FC } from 'react';
import type { Blog } from '@/app/_types/Blog';
import { CardLayout } from '../CardLayout';
type Props = {
  blogs: readonly Blog[];
};

export const BlogsCard: FC<Props> = () => {
  return <CardLayout title='Blogs'>blogs</CardLayout>;
};
