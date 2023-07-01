'use client';
import React from 'react';
import { profileCardStyle } from './style.css';
import { Accounts } from '../Accounts';
import { ImageDetail } from '@/features/request';
import Image from 'next/image';

type Props = {
  imgDetail: ImageDetail | null;
};
export const ProfileCard: React.FC<Props> = ({ imgDetail }) => {
  console.log(imgDetail);
  return (
    <div className={profileCardStyle.wrapper}>
      <h3 className={profileCardStyle.head}>About Me</h3>

      {imgDetail && (
        <div className={profileCardStyle.imgWrapper}>
          <Image
            alt='top'
            src={imgDetail.image.url}
            width={250}
            height={250}
            className={profileCardStyle.img}
          />
        </div>
      )}
      <Accounts />
    </div>
  );
};
