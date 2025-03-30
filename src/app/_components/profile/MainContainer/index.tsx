import React from 'react';
import { ImageDetail } from '../../../_api/getImages';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { ProfileCard } from '../ProfileCard';
import { WorksCard } from '../WorksCard';
import { BlogsCard } from '../BlogsCard';
import { Blog } from '@/app/_types/Blog';

type Props = {
  contents: (ImageDetail & MicroCMSContentId & MicroCMSDate)[];
  blogs: readonly Blog[];
};

export const MainContainer: React.FC<Props> = ({ contents, blogs }) => {
  return (
    <>
      <ProfileCard url={contents.find((val) => val.label === 'top')?.image.url ?? ''} />
      <WorksCard />
      <BlogsCard blogs={blogs} />
    </>
  );
};
