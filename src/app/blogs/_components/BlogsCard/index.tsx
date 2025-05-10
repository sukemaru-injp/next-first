import type { Blog } from '@/app/_types/Blog';
import { format } from 'date-fns';
import Link from 'next/link';
import { type FC, useMemo } from 'react';
import { CardLayout } from '../../../_components/profile/CardLayout';
import { blogsCardStyle } from './style.css';

type Props = {
	blogs: readonly Blog[];
};

export const BlogsCard: FC<Props> = ({ blogs }) => {
	return (
		<CardLayout title="Blogs">
			<ul className={blogsCardStyle.wrapper}>
				{blogs.map((b) => (
					<BlogSummary key={b.id} blog={b} />
				))}
			</ul>
		</CardLayout>
	);
};

const BlogSummary: FC<{ blog: Blog }> = ({ blog }) => {
	const displayDate = useMemo(
		() => format(new Date(blog.date), 'yyyy-MM-dd'),
		[blog.date]
	);

	return (
		<li className={blogsCardStyle.list}>
			<p className={blogsCardStyle.dateText}>{displayDate}</p>
			{blog.link ? (
				<a
					href={blog.link}
					target="_blank"
					rel="noopener noreferrer"
					className={blogsCardStyle.anchor}
				>
					{blog.title}
				</a>
			) : (
				<Link href={`/blogs/${blog.id}`} className={blogsCardStyle.anchor}>
					{blog.title}
				</Link>
			)}
		</li>
	);
};
