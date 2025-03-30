import React from 'react';
import { ImageDetail } from '../../_api/getImages';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { ProfileCard } from '../ProfileCard';
import { WorksCard } from '../WorksCard';

type Props = {
  contents: (ImageDetail & MicroCMSContentId & MicroCMSDate)[];
};

export const MainContainer: React.FC<Props> = ({ contents }) => {
  return (
    <>
      <ProfileCard url={contents.find((val) => val.label === 'top')?.image.url ?? ''} />
      <WorksCard />
    </>
  );
};
