'use client';
import { profileInner } from '@/utils/ui';
import Image from 'next/image';
import type React from 'react';
import { CardLayout } from '../CardLayout';
import { profileCardStyle } from './style.css';

export const ProfileCard: React.FC = () => {
	return (
		<CardLayout title="About Me">
			<div className={profileCardStyle.imgWrapper}>
				<Image
					alt="top"
					src={'/top-image.png'}
					width={300}
					height={300}
					className={profileCardStyle.img}
					priority
				/>
			</div>

			<div className={profileCardStyle.inner}>
				<ul>
					{profileInner.map((v) => {
						return (
							<li key={v} className={profileCardStyle.li}>
								{v}
							</li>
						);
					})}
				</ul>
			</div>
		</CardLayout>
	);
};
