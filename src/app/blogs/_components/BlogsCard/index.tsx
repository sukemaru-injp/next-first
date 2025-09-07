import type { Blog } from '@/app/_types/Blog';
import { NoteIcon } from '@/utils/icons';
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

	const displayIcon = useMemo(() => {
		if (blog.source?.includes('note.com')) {
			return <NoteIcon />;
		}
		return undefined;
	}, [blog.source]);

	return (
		<li className={blogsCardStyle.list}>
			<div className={blogsCardStyle.headerArea}>
				<p className={blogsCardStyle.dateText}>{displayDate}</p>
				{displayIcon && (
					<span className={blogsCardStyle.iconSpan}>{displayIcon}</span>
				)}
			</div>
			{blog.source ? (
				<a
					href={blog.source}
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
