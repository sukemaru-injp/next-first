'use client';
import React from 'react';
import { profileCardStyle } from './style.css';
import Image from 'next/image';
import { profileInner } from '@/utils/ui';
import { CardLayout } from '../CardLayout';

type Props = {
  url: string;
};
export const ProfileCard: React.FC<Props> = ({ url }) => {
  return (
    <CardLayout title='About Me'>
      <div className={profileCardStyle.imgWrapper}>
        <Image
          alt='top'
          src={url}
          width={250}
          height={250}
          className={profileCardStyle.img}
          priority
        />
      </div>

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
    </CardLayout>
  );
};
