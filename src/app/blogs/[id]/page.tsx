import type { JSX } from 'react';
import { getBlogDetail } from './_api/getBlogDetail';
import { Presenter } from './_components/Presenter';

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

	return <Presenter blog={res} />;
}
