'use client';
import { CardLayout } from '@/app/_components/profile/CardLayout';
import type { Blog } from '@/app/_types/Blog';
import { format } from 'date-fns';
import Markdown from 'react-markdown';
import { dateText, inner } from './styles.css';

type Props = {
	blog: Blog;
};

export const Presenter: React.FC<Props> = ({ blog }) => {
	return (
		<CardLayout title={blog.title}>
			<div>
				<p className={dateText}>created: {format(blog.date, 'yyyy-MM-dd')}</p>
				<div className={inner}>
					<Markdown>{blog.contents}</Markdown>
				</div>
			</div>
		</CardLayout>
	);
};
