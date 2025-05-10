import type { JSX } from 'react';
import { getBlogDetail } from './_api/getBlogDetail';

export default async function Page({
	params
}: {
	params: Promise<{ id: string }>;
}): Promise<JSX.Element> {
	const { id } = await params;

	const res = await getBlogDetail({ id });

	if (res == null) {
		return <>Not Found</>;
	}

	return <div>blog:{res.title}</div>;
}
