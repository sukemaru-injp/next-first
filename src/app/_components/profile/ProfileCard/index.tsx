'use client';
import { profileInner } from '@/utils/ui';
import Image from 'next/image';
import type React from 'react';
import { CardLayout } from '../CardLayout';
import { profileCardStyle } from './style.css';

type Props = {
	url: string;
};
export const ProfileCard: React.FC<Props> = ({ url }) => {
	return (
		<CardLayout title="About Me">
			<div className={profileCardStyle.imgWrapper}>
				<Image
					alt="top"
					src={url}
					width={250}
					height={250}
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
