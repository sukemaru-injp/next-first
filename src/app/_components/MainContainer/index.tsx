'use client';

import React, { useMemo } from 'react';
import { mainStyle } from './style.css';
import { ImageDetail } from '@/features/request';
import { MicroCMSContentId, MicroCMSDate } from 'microcms-js-sdk';
import { ProfileCard } from '../ProfileCard';
import { WorksCard } from '../WorksCard';

type Props = {
  contents: (ImageDetail & MicroCMSContentId & MicroCMSDate)[];
};

export const MainContainer: React.FC<Props> = ({ contents }) => {
  const imgDetail = useMemo(() => contents.find((val) => val.label === 'top') ?? null, [contents]);

  return (
    <div className={mainStyle.wrapper}>
      <ProfileCard imgDetail={imgDetail} />
      <WorksCard />
    </div>
  );
};
