import { getBlogs } from '../_api/getBlogs';
import { BlogsCard } from './_components/BlogsCard';

export default async function Page() {
	const blogs = await getBlogs();

	return (
		<div>
			<BlogsCard blogs={blogs} />
		</div>
	);
}
