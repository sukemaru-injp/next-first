import type { Blog } from '@/app/_types/Blog';
import type { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import type React from 'react';
import type { ImageDetail } from '../../../_api/getImages';
import { ProfileCard } from '../ProfileCard';
import { WorksCard } from '../WorksCard';

type Props = {
	contents: (ImageDetail & MicroCMSContentId & MicroCMSDate)[];
	blogs: readonly Blog[];
};

export const MainContainer: React.FC<Props> = ({ contents }) => {
	return (
		<>
			<ProfileCard
				url={contents.find((val) => val.label === 'top')?.image.url ?? ''}
			/>
			<WorksCard />
		</>
	);
};
