'use client';
import React from 'react';
import { profileCardStyle } from './style.css';
import { Accounts } from '../Accounts';
import { ImageDetail } from '@/features/request';
import Image from 'next/image';
import { profileInner } from '@/utlis/ui';

type Props = {
  imgDetail: ImageDetail | null;
};
export const ProfileCard: React.FC<Props> = ({ imgDetail }) => {
  return (
    <div className={profileCardStyle.wrapper}>
      <h2 className={profileCardStyle.head}>About Me</h2>

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

      <div className={profileCardStyle.inner}>
        <ul>
          {profileInner.map((v, idx) => {
            return (
              <li key={idx} className={profileCardStyle.li}>
                {v}
              </li>
            );
          })}
        </ul>
      </div>
      <Accounts />
    </div>
  );
};
